import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend, NOTIFY_FROM, NOTIFY_CONTACT_EMAIL } from "@/lib/resend";

const contactFields = z.object({
  name: z.string().min(1),
  email: z.email(),
  company: z.string().min(1),
  role: z.string().min(1),
  projectType: z.string().min(1),
  message: z.string().min(10),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:4px 12px 4px 0;color:#5f615c;white-space:nowrap;">${label}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !NOTIFY_CONTACT_EMAIL) {
    return NextResponse.json(
      { ok: false, error: "Email notifications are not configured on the server." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactFields.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid message data." }, { status: 400 });
  }

  const data = parsed.data;

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#111;">
      <h2 style="margin:0 0 16px;">New contact message</h2>
      <table>
        ${row("Name", data.name)}
        ${row("Email", data.email)}
        ${row("Company", data.company)}
        ${row("Role", data.role)}
        ${row("Project type", data.projectType)}
      </table>
      <h3 style="margin:20px 0 4px;">Message</h3>
      <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const { error } = await getResend().emails.send({
    from: NOTIFY_FROM,
    to: [NOTIFY_CONTACT_EMAIL],
    replyTo: data.email,
    subject: `New contact message — ${data.name} (${data.company})`,
    html,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

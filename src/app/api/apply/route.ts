import { NextResponse } from "next/server";
import { z } from "zod";
import { getResend, NOTIFY_FROM, NOTIFY_TO } from "@/lib/resend";

const applyFields = z.object({
  jobTitle: z.string().min(1),
  jobSlug: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  coverLetter: z.string().optional(),
  workAuthorization: z.enum(["yes", "no"]),
  sponsorshipRequired: z.enum(["yes", "no"]),
  additionalInfo: z.string().optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#5f615c;white-space:nowrap;">${label}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !NOTIFY_TO) {
    return NextResponse.json(
      { ok: false, error: "Email notifications are not configured on the server." },
      { status: 500 },
    );
  }

  const formData = await request.formData();
  const parsed = applyFields.safeParse({
    jobTitle: formData.get("jobTitle"),
    jobSlug: formData.get("jobSlug"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    linkedin: formData.get("linkedin") || undefined,
    portfolio: formData.get("portfolio") || undefined,
    coverLetter: formData.get("coverLetter") || undefined,
    workAuthorization: formData.get("workAuthorization"),
    sponsorshipRequired: formData.get("sponsorshipRequired"),
    additionalInfo: formData.get("additionalInfo") || undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid application data." }, { status: 400 });
  }

  const data = parsed.data;
  const resumeEntry = formData.get("resume");
  const attachments: { filename: string; content: Buffer }[] = [];
  if (resumeEntry instanceof File && resumeEntry.size > 0) {
    const buffer = Buffer.from(await resumeEntry.arrayBuffer());
    attachments.push({ filename: resumeEntry.name, content: buffer });
  }

  const html = `
    <div style="font-family:sans-serif;font-size:14px;color:#111;">
      <h2 style="margin:0 0 16px;">New application: ${escapeHtml(data.jobTitle)}</h2>
      <table>
        ${row("Name", `${data.firstName} ${data.lastName}`)}
        ${row("Email", data.email)}
        ${row("Phone", data.phone)}
        ${row("LinkedIn", data.linkedin)}
        ${row("Portfolio", data.portfolio)}
        ${row("Work authorization", data.workAuthorization === "yes" ? "Authorized to work in the EU" : "Not authorized")}
        ${row("Sponsorship required", data.sponsorshipRequired === "yes" ? "Yes" : "No")}
      </table>
      ${data.coverLetter ? `<h3 style="margin:20px 0 4px;">Cover letter</h3><p style="white-space:pre-wrap;">${escapeHtml(data.coverLetter)}</p>` : ""}
      ${data.additionalInfo ? `<h3 style="margin:20px 0 4px;">Additional information</h3><p style="white-space:pre-wrap;">${escapeHtml(data.additionalInfo)}</p>` : ""}
      ${attachments.length === 0 ? '<p style="margin-top:20px;color:#b74a4a;">No resume file was attached.</p>' : ""}
    </div>
  `;

  const { error } = await getResend().emails.send({
    from: NOTIFY_FROM,
    to: [NOTIFY_TO],
    replyTo: data.email,
    subject: `New application — ${data.jobTitle} — ${data.firstName} ${data.lastName}`,
    html,
    attachments,
  });

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

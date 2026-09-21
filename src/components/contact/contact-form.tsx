"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { FormField, inputClasses, textareaClasses } from "@/components/ui/form-field";
import { PrimaryButton } from "@/components/ui/primary-button";

const projectTypes = [
  "Agentic AI",
  "Enterprise AI",
  "Machine Learning",
  "AI Platform",
  "Special Project",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Enter a valid work email"),
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  projectType: z.enum(projectTypes, { error: "Select a project type" }),
  message: z.string().min(10, "Tell us a bit more about the project"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit() {
    // Frontend-only mock submission — no backend is wired up yet.
    // TODO: replace with a real contact-intake integration.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-border p-8 rounded-card">
        <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="size-5" aria-hidden />
        </span>
        <h2 className="text-h4 font-medium text-text">Message received</h2>
        <p className="max-w-[var(--width-text)] text-body text-text-muted">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" className={inputClasses} {...register("name")} />
        </FormField>
        <FormField label="Work email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" className={inputClasses} {...register("email")} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Company" htmlFor="company" error={errors.company?.message}>
          <input id="company" className={inputClasses} {...register("company")} />
        </FormField>
        <FormField label="Role" htmlFor="role" error={errors.role?.message}>
          <input id="role" className={inputClasses} {...register("role")} />
        </FormField>
      </div>

      <FormField label="Project type" htmlFor="projectType" error={errors.projectType?.message}>
        <select id="projectType" defaultValue="" className={inputClasses} {...register("projectType")}>
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea id="message" rows={6} className={textareaClasses} {...register("message")} />
      </FormField>

      <PrimaryButton type="submit" disabled={isSubmitting} showArrow={false} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send message"}
      </PrimaryButton>
    </form>
  );
}

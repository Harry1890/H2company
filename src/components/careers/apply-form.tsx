"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { FormField, inputClasses, textareaClasses } from "@/components/ui/form-field";
import { PrimaryButton } from "@/components/ui/primary-button";
import { cn } from "@/lib/utils";

const applySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  linkedin: z.union([z.url("Enter a valid URL"), z.literal("")]).optional(),
  portfolio: z.union([z.url("Enter a valid URL"), z.literal("")]).optional(),
  resume: z
    .custom<FileList>()
    .refine((files) => files instanceof FileList && files.length === 1, "Resume is required"),
  coverLetter: z.string().optional(),
  workAuthorization: z.enum(["yes", "no"], { error: "Select an option" }),
  sponsorshipRequired: z.enum(["yes", "no"], { error: "Select an option" }),
  additionalInfo: z.string().optional(),
});

type ApplyValues = z.infer<typeof applySchema>;

export function ApplyForm({ jobTitle, jobSlug }: { jobTitle: string; jobSlug: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyValues>({ resolver: zodResolver(applySchema) });

  async function onSubmit(values: ApplyValues) {
    setSubmitError(null);

    const formData = new FormData();
    formData.append("jobTitle", jobTitle);
    formData.append("jobSlug", jobSlug);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    if (values.linkedin) formData.append("linkedin", values.linkedin);
    if (values.portfolio) formData.append("portfolio", values.portfolio);
    if (values.coverLetter) formData.append("coverLetter", values.coverLetter);
    formData.append("workAuthorization", values.workAuthorization);
    formData.append("sponsorshipRequired", values.sponsorshipRequired);
    if (values.additionalInfo) formData.append("additionalInfo", values.additionalInfo);
    const file = values.resume?.[0];
    if (file) formData.append("resume", file);

    try {
      const response = await fetch("/api/apply", { method: "POST", body: formData });
      const result = await response.json().catch(() => ({ ok: false }));
      if (!response.ok || !result.ok) {
        setSubmitError(
          result.error ?? "Something went wrong submitting your application. Please try again.",
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong submitting your application. Please try again.");
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-start gap-4 border border-border p-8 rounded-card"
      >
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground"
        >
          <Check className="size-5" aria-hidden />
        </motion.span>
        <h2 className="text-h4 font-medium text-text">Application received</h2>
        <p className="max-w-[var(--width-text)] text-body text-text-muted">
          Thanks for applying to {jobTitle}. We review every application and will follow up if
          there&apos;s a fit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="First name" htmlFor="firstName" error={errors.firstName?.message}>
          <input id="firstName" className={inputClasses} {...register("firstName")} />
        </FormField>
        <FormField label="Last name" htmlFor="lastName" error={errors.lastName?.message}>
          <input id="lastName" className={inputClasses} {...register("lastName")} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" className={inputClasses} {...register("email")} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <input id="phone" type="tel" className={inputClasses} {...register("phone")} />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="LinkedIn" htmlFor="linkedin" optional error={errors.linkedin?.message}>
          <input id="linkedin" className={inputClasses} {...register("linkedin")} />
        </FormField>
        <FormField
          label="GitHub / Portfolio"
          htmlFor="portfolio"
          optional
          error={errors.portfolio?.message}
        >
          <input id="portfolio" className={inputClasses} {...register("portfolio")} />
        </FormField>
      </div>

      <FormField label="Resume" htmlFor="resume" error={errors.resume?.message as string | undefined}>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className={cn(inputClasses, "h-auto py-2.5")}
          {...register("resume")}
        />
      </FormField>

      <FormField label="Cover letter" htmlFor="coverLetter" optional error={errors.coverLetter?.message}>
        <textarea id="coverLetter" rows={5} className={textareaClasses} {...register("coverLetter")} />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Work authorization"
          htmlFor="workAuthorization"
          error={errors.workAuthorization?.message}
        >
          <select
            id="workAuthorization"
            defaultValue=""
            className={inputClasses}
            {...register("workAuthorization")}
          >
            <option value="" disabled>
              Are you authorized to work in the EU?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormField>
        <FormField
          label="Sponsorship"
          htmlFor="sponsorshipRequired"
          error={errors.sponsorshipRequired?.message}
        >
          <select
            id="sponsorshipRequired"
            defaultValue=""
            className={inputClasses}
            {...register("sponsorshipRequired")}
          >
            <option value="" disabled>
              Will you require sponsorship?
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormField>
      </div>

      <FormField
        label="Additional information"
        htmlFor="additionalInfo"
        optional
        error={errors.additionalInfo?.message}
      >
        <textarea id="additionalInfo" rows={4} className={textareaClasses} {...register("additionalInfo")} />
      </FormField>

      {submitError ? (
        <p role="alert" className="text-small text-danger">
          {submitError}
        </p>
      ) : null}

      <PrimaryButton type="submit" disabled={isSubmitting} showArrow={false} className="w-full sm:w-auto">
        {isSubmitting ? "Submitting…" : "Submit application"}
      </PrimaryButton>
    </form>
  );
}

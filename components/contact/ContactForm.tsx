"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarClock, CheckCircle2, LoaderCircle, ShieldCheck } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormLabel from "@/components/ui/FormLabel";

import { contact } from "@/data/contact";
import { contactTabs, type ContactTabId } from "@/data/contact-tabs";
import { site } from "@/data/site";
import { contactSchema, type ContactFormData, type ContactFormInput } from "@/lib/validations/contact";
import type { ContactFieldName, ContactFormField } from "@/types/contact";

type SubmissionStatus = { type: "success" | "error" | null; message: string };

const fieldClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-paper px-4 py-3.5 text-ink placeholder:text-[#8A8F95] transition focus:bg-white focus:outline-none focus:ring-2 ${
    hasError ? "border-red-600 focus:border-red-600 focus:ring-red-600/20" : "border-line focus:border-ink focus:ring-ink/10"
  }`;

const field = (name: ContactFieldName) => contact.form.fields.find((f) => f.name === name) as ContactFormField;
const serviceField = field("service");
const empty = { name: "", email: "", phone: "", service: "", budget: "", timeline: "", message: "", website: "" };

/** Which tab an incoming ?service= value belongs to (engineering if unknown). */
function tabFor(serviceValue: string): ContactTabId {
  return serviceField.options?.find((o) => o.value === serviceValue)?.group ?? "engineering";
}

/**
 * The contact form (2026). Three tabs (commerce engineering, ready-made software, operations support) each show
 * only the fields they need; the request to /api/contact is unchanged. Validation, the honeypot and sending
 * work exactly as before.
 */
export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [tabId, setTabId] = useState<ContactTabId>(() => tabFor(initialService));
  const [status, setStatus] = useState<SubmissionStatus>({ type: null, message: "" });
  const tab = contactTabs.find((t) => t.id === tabId)!;
  const sentRef = useRef<HTMLDivElement>(null);

  // Bring the "sent" panel into view: it replaces the much taller form.
  useEffect(() => {
    if (status.type === "success") sentRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status.type]);
  const options = (serviceField.options ?? []).filter((o) => o.group === tabId || o.slug === "other");

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormInput, unknown, ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { ...empty, service: initialService },
  });

  useEffect(() => {
    if (initialService) setValue("service", initialService);
  }, [initialService, setValue]);

  const switchTab = (id: ContactTabId) => {
    if (id === tabId) return;
    setTabId(id);
    // The service list changes per tab; budget and timeline only apply to engineering. Typed text is kept.
    setValue("service", "");
    if (id !== "engineering") {
      setValue("budget", "");
      setValue("timeline", "");
    }
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setStatus({ type: null, message: "" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message ?? "Unable to send your enquiry.");
      setStatus({ type: "success", message: result.message ?? "Thank you. Your message has been sent." });
      reset({ ...empty });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    }
  };

  const errorFor = (name: ContactFieldName) => errors[name]?.message;
  const describedBy = (name: ContactFieldName) => (errorFor(name) ? `${name}-error` : undefined);
  const ErrorText = ({ name }: { name: ContactFieldName }) =>
    errorFor(name) ? (
      <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-red-700">{String(errorFor(name))}</p>
    ) : null;

  const textInput = (name: "name" | "email" | "phone") => {
    const f = field(name);
    return (
      <div>
        <FormLabel htmlFor={name} required={f.required}>{f.label}</FormLabel>
        <input id={name} type={f.type} autoComplete={f.autoComplete} placeholder={f.placeholder} aria-invalid={!!errorFor(name)} aria-describedby={describedBy(name)} {...register(name)} className={fieldClass(!!errorFor(name))} />
        <ErrorText name={name} />
      </div>
    );
  };

  const select = (name: "service" | "budget" | "timeline", label: string, opts: { label: string; value: string }[], required: boolean) => (
    <div>
      <FormLabel htmlFor={name} required={required}>{label}</FormLabel>
      <select id={name} aria-invalid={!!errorFor(name)} aria-describedby={describedBy(name)} {...register(name)} className={fieldClass(!!errorFor(name))}>
        <option value="">{field(name).placeholder}</option>
        {opts.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <ErrorText name={name} />
    </div>
  );

  if (status.type === "success") {
    return (
      <div ref={sentRef} className="scroll-mt-28 rounded-[28px] border border-line bg-white p-7 text-ink sm:p-9" role="status" aria-live="polite">
        <CheckCircle2 aria-hidden className="h-10 w-10 text-emerald-700" strokeWidth={2} />
        <h2 className="mt-4 font-display text-[30px] font-extrabold leading-tight tracking-[-0.02em]">Message sent. Thank you.</h2>
        <p className="mt-3 max-w-[520px] text-[17px] text-muted">A real person reads every message, and we reply within one working day, usually by email.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {tab.offerCall && (
            <a href={site.bookCall} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-[14px] font-bold text-ink hover:bg-[#f7c561]">
              <CalendarClock aria-hidden className="h-4 w-4" /> Want to talk sooner? Book a call
            </a>
          )}
          <button type="button" onClick={() => setStatus({ type: null, message: "" })} className="rounded-full border-[1.5px] border-ink px-6 py-3 font-bold hover:bg-ink hover:text-paper">
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-line bg-white p-6 text-ink sm:p-9">
      <p className="yf-label">{contact.form.eyebrow}</p>
      <h2 className="mt-3 font-display text-[30px] font-extrabold leading-tight tracking-[-0.02em]">What can we help with?</h2>

      <div role="tablist" aria-label="Type of enquiry" className="mt-5 grid gap-2 sm:grid-cols-3">
        {contactTabs.map((t) => {
          const on = t.id === tabId;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="contact-form-panel"
              onClick={() => switchTab(t.id)}
              className={`rounded-2xl border-[1.5px] px-4 py-3 text-left text-[15px] font-bold transition ${on ? "border-ink bg-ink text-paper" : "border-line bg-paper/60 text-ink hover:border-ink"}`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-[15px] text-muted">{tab.intro}</p>

      <form id="contact-form-panel" role="tabpanel" onSubmit={handleSubmit(onSubmit)} noValidate className="mt-7">
        {/* Honeypot field */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
          {textInput("name")}
          {textInput("email")}
          {textInput("phone")}
          {select("service", tab.serviceLabel, options, true)}
          {tab.showBudget && select("budget", field("budget").label, field("budget").options ?? [], false)}
          {tab.showBudget && select("timeline", field("timeline").label, field("timeline").options ?? [], false)}
          <div className="md:col-span-2">
            <FormLabel htmlFor="message" required>{tab.messageLabel}</FormLabel>
            <textarea id="message" rows={6} placeholder={tab.messagePlaceholder} aria-invalid={!!errorFor("message")} aria-describedby={describedBy("message")} {...register("message")} className={`${fieldClass(!!errorFor("message"))} min-h-[160px] resize-y`} />
            <ErrorText name="message" />
          </div>
        </div>

        {status.type === "error" && (
          <div role="alert" aria-live="polite" className="mt-6 rounded-xl border border-red-600/30 bg-red-50 px-5 py-4 text-sm text-red-800">{status.message}</div>
        )}

        <div className="mt-8 flex flex-col gap-5 border-t border-line-soft pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex max-w-md items-start gap-2 text-xs leading-5 text-subtle">
            <ShieldCheck aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
            {contact.form.privacyNote}
          </p>
          <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting} className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-[15px] font-bold text-ink transition hover:bg-[#f7c561] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
            {isSubmitting ? (
              <><LoaderCircle aria-hidden className="mr-2 h-4 w-4 animate-spin" />{contact.form.submittingLabel}</>
            ) : (
              <>{contact.form.submitLabel}<ArrowRight aria-hidden className="ml-2 h-4 w-4" /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

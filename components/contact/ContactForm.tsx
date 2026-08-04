"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/ui/Button";
import FormLabel from "@/components/ui/FormLabel";

import { contactSchema, ContactFormData } from "@/lib/validations/contact";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);

    // Tomorrow this will become:
    // await fetch("/api/contact")

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Tell us about your project
        </h2>

        <p className="mt-3 text-slate-400">
          We&apos;d love to hear about your project. Fill out the form below and
          we&apos;ll get back to you within 24 hours.
        </p>

        <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <span className="text-red-500">*</span>
          Indicates required fields.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FormLabel htmlFor="name" required>
              Full Name
            </FormLabel>

            <input
              id="name"
              autoComplete="name"
              placeholder="John Doe"
              {...register("name")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <FormLabel htmlFor="email" required>
              Email Address
            </FormLabel>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="john@example.com"
              {...register("email")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>

            <input
              id="phone"
              autoComplete="tel"
              placeholder="+92 300 1234567"
              {...register("phone")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            />
          </div>

          <div>
            <FormLabel htmlFor="service" required>
              Service Required
            </FormLabel>

            <select
              id="service"
              defaultValue=""
              {...register("service")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            >
              <option value="">Select a service</option>

              <option>Salesforce Commerce Cloud</option>
              <option>Headless Commerce</option>
              <option>PWA Kit Development</option>
              <option>Enterprise Software</option>
              <option>Web Application</option>
              <option>Mobile Application</option>
              <option>Consulting</option>
              <option>Other</option>
            </select>

            {errors.service && (
              <p className="mt-2 text-sm text-red-400">
                {errors.service.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <FormLabel htmlFor="budget">Estimated Budget</FormLabel>

            <select
              id="budget"
              defaultValue=""
              {...register("budget")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            >
              <option value="">Select Budget</option>
              <option>Less than $5,000</option>
              <option>$5,000 – $10,000</option>
              <option>$10,000 – $25,000</option>
              <option>$25,000 – $50,000</option>
              <option>$50,000+</option>
              <option>Prefer not to say</option>
            </select>
          </div>

          <div>
            <FormLabel htmlFor="timeline">Timeline</FormLabel>

            <select
              id="timeline"
              defaultValue=""
              {...register("timeline")}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
            >
              <option value="">Select Timeline</option>
              <option>ASAP</option>
              <option>Within 1 Month</option>
              <option>2–3 Months</option>
              <option>3–6 Months</option>
              <option>Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <FormLabel htmlFor="message" required>
            Project Details
          </FormLabel>

          <textarea
            id="message"
            rows={7}
            placeholder="Describe your project, timeline, goals, and any challenges..."
            {...register("message")}
            className="min-h-[180px] w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 text-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

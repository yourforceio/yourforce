"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
  LoaderCircle,
  ShieldCheck,
} from "lucide-react";

import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormLabel from "@/components/ui/FormLabel";

import { contact } from "@/data/contact";

import {
  contactSchema,
  type ContactFormData,
  type ContactFormInput,
} from "@/lib/validations/contact";

type ContactFormProps = {
  initialService?: string;
};

type SubmissionStatus = {
  type: "success" | "error" | null;
  message: string;
};

const baseFieldClassName = `
  w-full
  rounded-xl
  border
  bg-paper
  px-4
  py-3.5
  text-ink
  placeholder:text-[#8A8F95]
  transition
  focus:bg-white
  focus:outline-none
  focus:ring-2
`;

const getFieldClassName = (
  hasError: boolean,
) =>
  `${baseFieldClassName} ${
    hasError
      ? `
        border-red-600
        focus:border-red-600
        focus:ring-red-600/20
      `
      : `
        border-line
        focus:border-ink
        focus:ring-ink/10
      `
  }`;

export default function ContactForm({
  initialService = "",
}: ContactFormProps) {
  const [status, setStatus] =
    useState<SubmissionStatus>({
      type: null,
      message: "",
    });

  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<
    ContactFormInput,
    unknown,
    ContactFormData
  >({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: initialService,
      budget: "",
      timeline: "",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    if (initialService) {
      setValue(
        "service",
        initialService,
      );
    }
  }, [
    initialService,
    setValue,
  ]);

  const onSubmit: SubmitHandler<
    ContactFormData
  > = async (data) => {
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      const result =
        (await response.json()) as {
          success?: boolean;
          message?: string;
        };

      if (
        !response.ok ||
        !result.success
      ) {
        throw new Error(
          result.message ??
            "Unable to send your enquiry.",
        );
      }

      setStatus({
        type: "success",

        message:
          result.message ??
          "Thank you. Your enquiry has been sent successfully.",
      });

      reset({
        name: "",
        email: "",
        phone: "",
        service: initialService,
        budget: "",
        timeline: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",

        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div
      className="
        rounded-[28px]
        border
        border-line
        bg-white
        p-6
        text-ink
        sm:p-9
      "
    >
      {/* Form introduction */}
      <div className="mb-8">
        <p className="yf-label">
          {contact.form.eyebrow}
        </p>

        <h2 className="mt-3 font-display text-[32px] font-extrabold leading-tight tracking-[-0.02em]">
          {contact.form.title}
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-muted">
          {contact.form.description}
        </p>

        <p className="mt-3 text-sm text-subtle">
          <span className="mr-1 text-red-600">
            *
          </span>

          {contact.form.requiredNote}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(
          onSubmit,
        )}
        noValidate
      >
        {/* Honeypot field */}
        <div
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor="website">
            Website
          </label>

          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {/* Form fields */}
        <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
          {contact.form.fields.map(
            (field) => {
              const error =
                errors[field.name];

              const hasError =
                Boolean(error);

              const errorId = `${field.name}-error`;
              const helperId = `${field.name}-helper`;

              const describedBy =
                hasError
                  ? errorId
                  : field.helper
                    ? helperId
                    : undefined;

              return (
                <div
                  key={field.name}
                  className={
                    field.fullWidth
                      ? "md:col-span-2"
                      : undefined
                  }
                >
                  <FormLabel
                    htmlFor={field.name}
                    required={
                      field.required
                    }
                  >
                    {field.label}
                  </FormLabel>

                  {field.type ===
                  "select" ? (
                    <select
                      id={field.name}
                      aria-invalid={
                        hasError
                      }
                      aria-describedby={
                        describedBy
                      }
                      {...register(
                        field.name,
                      )}
                      className={getFieldClassName(
                        hasError,
                      )}
                    >
                      <option value="">
                        {field.placeholder ??
                          `Select ${field.label}`}
                      </option>

                      {field.options?.map(
                        (option) => (
                          <option
                            key={
                              option.value
                            }
                            value={
                              option.value
                            }
                          >
                            {option.label}
                          </option>
                        ),
                      )}
                    </select>
                  ) : field.type ===
                    "textarea" ? (
                    <textarea
                      id={field.name}
                      rows={
                        field.rows ?? 7
                      }
                      placeholder={
                        field.placeholder
                      }
                      aria-invalid={
                        hasError
                      }
                      aria-describedby={
                        describedBy
                      }
                      {...register(
                        field.name,
                      )}
                      className={`${getFieldClassName(
                        hasError,
                      )} min-h-[180px] resize-y`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      autoComplete={
                        field.autoComplete
                      }
                      placeholder={
                        field.placeholder
                      }
                      aria-invalid={
                        hasError
                      }
                      aria-describedby={
                        describedBy
                      }
                      {...register(
                        field.name,
                      )}
                      className={getFieldClassName(
                        hasError,
                      )}
                    />
                  )}

                  {field.helper &&
                    !hasError && (
                      <p
                        id={helperId}
                        className="mt-2 text-xs leading-5 text-subtle"
                      >
                        {field.helper}
                      </p>
                    )}

                  {error?.message && (
                    <p
                      id={errorId}
                      role="alert"
                      className="mt-2 text-sm text-red-700"
                    >
                      {String(
                        error.message,
                      )}
                    </p>
                  )}
                </div>
              );
            },
          )}
        </div>

        {/* Submission message */}
        {status.type && (
          <div
            role={
              status.type === "error"
                ? "alert"
                : "status"
            }
            aria-live="polite"
            className={`
              mt-6
              rounded-xl
              border
              px-5
              py-4
              text-sm

              ${
                status.type ===
                "success"
                  ? "border-emerald-600/30 bg-emerald-50 text-emerald-800"
                  : "border-red-600/30 bg-red-50 text-red-800"
              }
            `}
          >
            {status.message}
          </div>
        )}

        {/* Submit area */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-5
            border-t
            border-line-soft
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="flex max-w-md items-start gap-2 text-xs leading-5 text-subtle">
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-ink"
            />

            {contact.form.privacyNote}
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-[15px] font-bold text-ink transition hover:bg-[#f7c561] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle
                  aria-hidden="true"
                  className="mr-2 h-4 w-4 animate-spin"
                />

                {
                  contact.form
                    .submittingLabel
                }
              </>
            ) : (
              <>
                {
                  contact.form
                    .submitLabel
                }

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
                />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

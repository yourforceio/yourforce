import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { contact } from "@/data/contact";

export default function ContactInfo() {
  const PrimaryIcon = contact.info.primaryContact.icon;

  return (
    <aside className="h-fit self-start">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/70
          p-6
          shadow-2xl
          shadow-black/10
          backdrop-blur-xl
          sm:p-8
        "
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-600/15 blur-[90px]" />

        <div className="relative">
          {/* Introduction */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            {contact.info.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white">
            {contact.info.title}
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            {contact.info.description}
          </p>

          {/* Primary contact */}
          <Link
            href={contact.info.primaryContact.href ?? "/contact"}
            className="
              group
              mt-7
              flex
              items-start
              gap-4
              rounded-2xl
              border
              border-blue-500/30
              bg-blue-500/10
              p-5
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-400/50
              hover:bg-blue-500/15
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400
              focus-visible:ring-offset-2
              focus-visible:ring-offset-slate-950
            "
          >
            <span
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                text-white
              "
            >
              <PrimaryIcon
                aria-hidden="true"
                className="h-5 w-5"
              />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                {contact.info.primaryContact.title}
              </span>

              <span className="mt-2 block break-words text-lg font-semibold text-white">
                {contact.info.primaryContact.value}
              </span>

              <span className="mt-2 block text-sm leading-6 text-slate-400">
                {contact.info.primaryContact.description}
              </span>
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className="
                h-5
                w-5
                shrink-0
                text-blue-400
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          {/* Delivery information */}
          <div className="mt-5 space-y-3">
            {contact.info.details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-950/45
                    p-4
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900
                      text-blue-400
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                    />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      {item.title}
                    </p>

                    <p className="mt-1 font-semibold text-slate-200">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

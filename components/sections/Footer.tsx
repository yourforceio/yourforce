import Logo from "@/components/branding/Logo";
import FooterBottom from "@/components/footer/FooterBottom";
import FooterColumn from "@/components/footer/FooterColumn";
import SocialLinks from "@/components/footer/SocialLinks";
import Container from "@/components/layout/Container";

import { footer } from "@/data/footer";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-slate-950
        text-white
      "
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 hidden h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[130px] md:block" />

        <div className="absolute -right-40 bottom-0 hidden h-[320px] w-[320px] rounded-full bg-cyan-500/[0.06] blur-[120px] md:block" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <Container>
        <div className="relative pb-8 pt-16 lg:pb-10 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1.95fr] lg:gap-20">
            {/* Company information */}
            <div className="max-w-md">
              <Logo />

              <p className="mt-6 text-sm font-semibold tracking-wide text-blue-400">
                {footer.company.tagline}
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {footer.company.description}
              </p>

              {/* Availability */}
              <div
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/[0.06]
                  px-3.5
                  py-2
                  text-xs
                  font-semibold
                  text-emerald-300
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                {footer.company.availability}
              </div>

              <div className="mt-7">
                <SocialLinks socials={footer.socials} />
              </div>
            </div>

            {/* Footer navigation */}
            <div
              className="
                grid
                gap-10
                sm:grid-cols-2
                xl:grid-cols-[0.8fr_1.25fr_0.95fr_0.9fr]
                xl:gap-12
              "
            >
              {footer.columns.map((column) => (
                <FooterColumn
                  key={column.title}
                  column={column}
                />
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <FooterBottom
              copyright={footer.bottom.copyright}
              builtWith={footer.bottom.builtWith}
              links={footer.bottom.links}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

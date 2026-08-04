import { contact } from "@/data/contact";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-28">
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-[-180px] top-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

                <div className="absolute right-[-180px] bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">

                {/* Badge */}

                <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
                    {contact.hero.badge}
                </div>

                {/* Heading */}

                <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                    {contact.hero.title}

                    <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                        {contact.hero.highlight}
                    </span>
                </h1>

                {/* Description */}

                <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300">
                    {contact.hero.description}
                </p>
            </div>
        </section>
    );
}
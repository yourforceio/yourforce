import { contact } from "@/data/contact";

export default function ContactInfo() {
    return (
        <div className="space-y-6">

            <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                    Get In Touch
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                    Let's build something exceptional.
                </h2>

                <p className="mt-3 text-slate-400">
                    We'd love to hear about your project, answer your
                    questions, and discuss how YourForce can help your
                    business grow.
                </p>
            </div>

            {contact.info.map((item) => (
                <div
                    key={item.title}
                    className="
                        group
                        flex
                        items-start
                        gap-5
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/70
                        p-6
                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-blue-500/40
                        hover:shadow-lg
                        hover:shadow-blue-500/10
                    "
                >
                    <div
                        className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-600/10
                            text-2xl
                            transition

                            group-hover:bg-blue-600/20
                        "
                    >
                        {item.icon}
                    </div>

                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">
                            {item.title}
                        </h3>

                        {item.title === "Email" ? (
                            <a
                                href={`mailto:${item.value}`}
                                className="
                                    mt-2
                                    inline-block
                                    text-lg
                                    font-medium
                                    text-blue-400
                                    transition
                                    hover:text-blue-300
                                "
                            >
                                {item.value}
                            </a>
                        ) : (
                            <p className="mt-2 text-lg text-blue-400">
                                {item.value}
                            </p>
                        )}

                        <p className="mt-2 text-slate-400">
                            {item.description}
                        </p>
                    </div>

                    <div
                        className="
                            text-slate-600
                            transition
                            group-hover:translate-x-1
                            group-hover:text-blue-400
                        "
                    >
                        →
                    </div>
                </div>
            ))}

            <div
                className="
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-gradient-to-r
                    from-blue-600/10
                    to-slate-900
                    p-6
                "
            >
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-lg font-semibold text-white">
                            Trusted Worldwide
                        </p>

                        <p className="mt-1 text-slate-400">
                            Helping businesses build scalable commerce
                            platforms and enterprise software.
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-2xl">⭐⭐⭐⭐⭐</p>
                        <p className="text-sm text-slate-400">
                            Fast response
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
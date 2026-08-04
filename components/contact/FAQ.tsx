"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { contact } from "@/data/contact";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="bg-slate-950 py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                        FAQ
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white">
                        {contact.faq.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        {contact.faq.description}
                    </p>

                </div>

                {/* Accordion */}

                <div className="mt-14 space-y-5">

                    {contact.faq.items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={item.question}
                                className="
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-slate-800
                                    bg-slate-900/60
                                    transition-all
                                    duration-300
                                "
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? -1 : index
                                        )
                                    }
                                    className="
                                        flex
                                        w-full
                                        items-center
                                        justify-between
                                        px-6
                                        py-5
                                        text-left
                                    "
                                >
                                    <span className="text-lg font-semibold text-white">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300 ${
                                            isOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 leading-7 text-slate-400">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
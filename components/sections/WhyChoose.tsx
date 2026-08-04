import Container from "@/components/layout/Container";
import { whyChoose } from "@/data/whyChoose";

export default function WhyChoose() {
    return (
        <section
            id="why-us"
            className="bg-white py-24"
        >
            <Container>

                <div className="mx-auto max-w-3xl text-center">

                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-sm font-medium text-blue-700">
                        {whyChoose.badge}
                    </span>

                    <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                        {whyChoose.heading}
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        {whyChoose.description}
                    </p>

                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {whyChoose.items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                            >
                                <div className="space-y-6">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon size={32} />
                                    </div>

                                    <h3 className="min-h-[64px] text-2xl font-bold leading-tight text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

            </Container>
        </section>
    );
}
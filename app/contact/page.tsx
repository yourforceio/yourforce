import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
    return (
        <main className="bg-slate-950">

            <ContactHero />

            <section className="pb-24">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:px-8">

                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>

                    <div className="lg:col-span-2">
                        <ContactInfo />
                    </div>

                </div>
            </section>

            <FAQ />

        </main>
    );
}
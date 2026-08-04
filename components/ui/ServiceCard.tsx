import type { Service } from "@/types/service";
import { serviceIcons } from "@/lib/service-icons";

type ServiceCardProps = {
    service: Service;
};

export default function ServiceCard({
    service: { title, description, icon, stack },
}: ServiceCardProps) {

    const Icon = serviceIcons[icon];
    return (
        <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                <Icon aria-hidden="true" className="h-7 w-7" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-slate-900">
                {title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-base leading-7 text-slate-600">
                {description}
            </p>

            {/* Stack */}
            {stack && (
                <div className="mt-auto pt-10">
                    <ul className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <li key={tech.name}>
                                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 hover:border-blue-200 hover:text-blue-600">
                                    {tech.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
}
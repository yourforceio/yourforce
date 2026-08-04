interface FormLabelProps {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
}

export default function FormLabel({
    htmlFor,
    children,
    required = false,
}: FormLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="mb-2 block text-sm font-medium text-slate-300"
        >
            {children}

            {required && (
                <span
                    className="ml-1 text-red-500"
                    aria-label="required"
                >
                    *
                </span>
            )}
        </label>
    );
}
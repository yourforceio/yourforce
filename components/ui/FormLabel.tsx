interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}

/** Form label. Optional fields say "optional" instead of required ones carrying an asterisk. */
export default function FormLabel({ htmlFor, children, required = false }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-ink">
      {children}
      {!required && <span className="ml-1.5 font-medium text-subtle">(optional)</span>}
    </label>
  );
}

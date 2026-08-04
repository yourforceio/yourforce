import React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  const baseClasses = "mx-auto max-w-7xl px-6";
  const containerClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={containerClasses} {...props}>
      {children}
    </div>
  );
}
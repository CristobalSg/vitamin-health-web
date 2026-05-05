import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
}

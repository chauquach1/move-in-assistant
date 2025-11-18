import React, { forwardRef, useId } from "react";
import type { HTMLAttributes, ReactNode } from "react";

interface SubjectContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: ReactNode;
}

export const SubjectContainer = forwardRef<HTMLDivElement, SubjectContainerProps>(
  ({ title, children, className, id, ...props }, ref) => {
    const fallbackId = useId();
    const baseId = id ?? `subject-${fallbackId}`;

    return (
      <div
        ref={ref}
        id={baseId}
        aria-labelledby={`${baseId}-title`}
        className={`flex flex-col min-w-full min-h-full gap-4 border-1 p-2 rounded-md ${className ?? ""}`}
        {...props}
      >
        <h2 id={`${baseId}-title`} className="text-2xl font-semibold">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-3">{children}</div>
      </div>
    );
  }
);
SubjectContainer.displayName = "SubjectContainer";

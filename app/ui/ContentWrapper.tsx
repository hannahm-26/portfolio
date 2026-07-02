import type { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <section
      aria-labelledby="countdown-summary-title"
      className="summary-card card card--panel"
    >
      {children}
    </section>
  );
}

import type { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

export function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <section aria-labelledby="countdown-summary-title">{children}</section>
  );
}

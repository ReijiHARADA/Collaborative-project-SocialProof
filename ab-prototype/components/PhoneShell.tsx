import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PhoneShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-dvh justify-center bg-neutral-100 px-2 py-4 text-neutral-900">
      <div
        className={cn(
          "flex w-full max-w-[430px] flex-col border border-neutral-200 bg-white shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

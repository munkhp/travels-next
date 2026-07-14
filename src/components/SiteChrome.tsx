"use client";

import { usePathname } from "next/navigation";

export default function SiteChrome({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return <>{children}</>;
}

import type { ReactNode } from "react";
import { SiteShell, shellMetadata, shellViewport } from "@/components/SiteShell";
import "../globals.css";

export const metadata = shellMetadata;
export const viewport = shellViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}

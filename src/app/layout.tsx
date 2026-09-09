import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import { firm } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${firm.name} | ${firm.address.city}, ${firm.address.stateAbbr}`,
  description: `${firm.name} represents clients throughout ${firm.address.city} and North Texas in personal injury, family law, criminal defense, estate planning, business law, and immigration matters. Call ${firm.phoneDisplay}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}

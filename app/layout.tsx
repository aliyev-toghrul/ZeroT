import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroT — Cybersecurity Readiness for SMEs",
  description:
    "AI-powered cybersecurity readiness assistant for small and medium businesses. Report suspicious messages, understand risk in plain language, and take guided response actions — no security team required.",
  openGraph: {
    title: "ZeroT — Cybersecurity Readiness for SMEs",
    description:
      "AI-powered cybersecurity readiness assistant. Report suspicious messages, understand risk, and take guided actions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

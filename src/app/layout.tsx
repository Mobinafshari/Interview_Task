"use client";
import { Inter, Geist } from "next/font/google";
import "@/styles/_base.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/reactQuery";
import { UserProvider } from "@/context/userContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable} ${geistSans.variable}`}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>{children}</UserProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

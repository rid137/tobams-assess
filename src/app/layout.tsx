import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/query-provider";
import { BlogProvider } from "@/context/BlogContext";

// COME BACK HERE
export const metadata: Metadata = {
  title: "Tobams Group Blog",
  description: "Stay Ahead Of The Curve: Stay Informed With Our Blog For The Latest Industry Insights",
  keywords: "Strategic Partnership, Book a Consultation, TG Academy, Projects, Pricing, blogs, articles, jobs, about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <BlogProvider>
          {children}
        </BlogProvider>
      </QueryClientProvider>
      </body>
    </html>
  );
}
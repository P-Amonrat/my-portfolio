import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Amonrat | Portfolio",
  description: "Amonrat is a passionate full-stack developer specializing in building modern web applications using cutting-edge technologies. Explore projects, skills, and experience in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

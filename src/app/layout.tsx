import { ourFileRouter } from "@/app/api/uploadthing/core";
import "@/app/globals.css";
import { ModalProvider } from "@/contexts/modal-provider";
import { QueryProvider } from "@/contexts/query-provider";
import { SocketProvider } from "@/contexts/socket-provider";
import { ThemeProvider } from "@/contexts/theme-provider";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { extractRouterConfig } from "uploadthing/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nosso Espaço",
	description: "Nosso cantinho privado para conversar, compartilhar e estar juntos.",
	openGraph: {
		type: "website",
		title: "Nosso Espaço",
		description: "Nosso cantinho privado para conversar, compartilhar e estar juntos.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
			<body className={cn(inter.className, "bg-space-bg text-space-text antialiased")}>
				<ClerkProvider
					afterSignOutUrl="/"

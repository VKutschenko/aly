import { SideBarActions } from "@/components/layout/side-bar-actions";
import { ModeToggle } from "@/components/mode-toggler";
import { Separator } from "@/components/ui/separator";
import { getCurrentProfile } from "@/lib/query";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Home, Heart } from "lucide-react";
import Link from "next/link";

export async function SideBar() {
	const profile = await getCurrentProfile();
	if (!profile) {
		return redirect("/");
	}

	return (
		<div className="flex flex-col space-y-4 items-center h-full text-primary w-full bg-space-sidebar py-3">
			{/* Logo */}
			<Link href="/" className="group relative">
				<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-space-accent to-space-purple flex items-center justify-center transition-all duration-300 group-hover:rounded-xl group-hover:shadow-lg group-hover:shadow-space-accent/30">
					<Heart className="w-6 h-6 text-white" />
				</div>
				<div className="absolute left-14 bg-space-server text-space-text text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
					Nosso Espaço
				</div>
			</Link>

			<Separator className="h-[2px] bg-space-border rounded-md w-10 mx-auto" />

			{/* Home */}
			<Link href="/" className="group 

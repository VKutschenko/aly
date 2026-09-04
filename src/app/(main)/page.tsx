import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggler";
import { initProfile, getFirstServer } from "@/lib/query";
import { InitialModel } from "@/components/modals/initial-model";
import { ProfileCard } from "@/components/user/profile-card";
import { Heart, MessageCircle, Video, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
	const profile = await initProfile();
	const server = await getFirstServer(profile.id);

	return (
		<>
			<main className="h-full bg-space-bg">
				<div className="flex flex-col h-full max-w-5xl mx-auto px-6 py-8">
					{/* Header */}
					<header className="flex items-center justify-between mb-8">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-space-accent to-space-purple flex items-center justify-center">
								<Heart className="w-5 h-5 text-white" />
							</div>
							<div>
								<h1 className="text-2xl font-bold text-space-text">Nosso Espaço</h1>
								<p className="text-sm text-space-muted">Nosso cantinho privado</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<ModeToggle />
							<UserButton
								appearance={{
									elements: {
										userButtonAvatarBox: "size-9 rounded-full ring-2 ring-space-accent/50",
									},

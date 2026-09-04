"use client";

import { useUser } from "@clerk/nextjs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Mail, Shield } from "lucide-react";

interface ProfileCardProps {
	profile: {
		id: string;
		name: string;
		email: string;
		imageUrl?: string | null;
		createdAt: Date;
	};
	server: {
		name: string;
		createdAt: Date;
	};
}

export function ProfileCard({ profile, server }: ProfileCardProps) {
	const { user } = useUser();

	if (!user) return null;

	return (
		<Card className="bg-space-sidebar border-space-border">
			<CardHeader className="pb-4">
				<CardTitle className="text-lg font-semibold text-space-text flex items-center gap-2">
					<Heart className="w-5 h-5 text-space-accent" />
					Nosso Perfil
				</CardTitle>
			</CardHeader>

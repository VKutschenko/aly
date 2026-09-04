"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Heart, Sparkles } from "lucide-react";

export function InitialModel() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(true);

	// Auto-cria o servidor ao abrir o modal
	useEffect(() => {
		const autoCreate = async () => {
			setIsLoading(true);
			try {
				await axios.post("/api/servers", {
					name: "Nosso Espaço",
					imageUrl: "",
				});
				router.refresh();
				setOpen(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);

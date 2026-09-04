import { ServerHeader } from "@/components/layout/server-header";
import { ServerChannel } from "@/components/server-channel";
import { ServerMember } from "@/components/server-member";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getCurrentProfile, getServer } from "@/lib/query";
import { ChannelType } from "@prisma/client";
import { Hash, Mic, Video } from "lucide-react";
import { redirect } from "next/navigation";

interface ServerSideBarProps {
	serverId: string;
}

const iconMap = {
	[ChannelType.TEXT]: <Hash className="mr-2 h-4 w-4 text-space-muted" />,
	[ChannelType.AUDIO]: <Mic className="mr-2 h-4 w-4 text-space-muted" />,
	[ChannelType.VIDEO]: <Video className="mr-2 h-4 w-4 text-space-muted" />,
};

export async function ServerSideBar({ serverId }: ServerSideBarProps) {
	const profile = await getCurrentProfile();
	if (!profile) {
		return redirect("/");
	}

	const server = await getServer(serverId, profile.id);

	const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT);
	const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO);
	const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO);
	const members = server?.members.filter((member) => member.profileId !== profile.id);

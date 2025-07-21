"use client";

import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaSlack,
  FaSnapchatGhost,
} from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/dmens/",
    icon: FaInstagram,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/dmensyt",
    icon: FaFacebook,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/dmensyt",
    icon: FaTwitter,
  },
  {
    title: "Whatsapp",
    href: "",
    icon: FaWhatsapp,
  },
  {
    title: "Snapchat",
    href: "",
    icon: FaSnapchatGhost,
  },
];

const SocialMedia = ({className,iconClassName,tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink.map(({ title, href, icon: Icon }) => (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Link href={href} 
              aria-label={title} 
              rel="noopener noreferrer"
              className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}>
                <Icon className="w-8 h-8" />
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold border border-shop_light_green", tooltipClassName)}>
                {title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

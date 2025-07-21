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
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

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
    title: "Github",
    href: "",
    icon: FaGithub,
  },
  {
    title: "Whatsapp",
    href: "",
    icon: FaWhatsapp,
  },
  {
    title: "Telegram",
    href: "",
    icon: FaTelegram,
  },
  {
    title: "Slack",
    href: "",
    icon: FaSlack,
  },
  {
    title: "Snapchat",
    href: "",
    icon: FaSnapchatGhost,
  },
];

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {socialLink.map(({ title, href, icon: Icon }) => (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Link href={href} aria-label={title}>
                <Icon className="w-8 h-8" />
              </Link>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

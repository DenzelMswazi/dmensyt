import { Facebook, Github, Instagram, Slack, Twitter } from 'lucide-react';
import React from 'react'
import { TooltipProvider } from './ui/tooltip';

const socialLink = [
    {
        title: "instagram",
        href: "https://www.instagram.com/dmens/",
        icon: <Instagram className='w-5 h-5' />,
    },
    {
        title: "facebook",
        href: "https://www.facebook.com/dmensyt",
        icon: <Facebook className='w-5 h-5' />,
    },
    {
        title: "twitter",
        href: "https://twitter.com/dmensyt",
        icon: <Twitter className='w-5 h-5' />,
    },
    {
        title: "Github",
        href: "",
        icon: <Github className='w-5 h-5' />,
    },
    {
        title: "Whatsapp",
        href: "",
        icon: <Whatsapp className='w-5 h-5' />,
    },
    {
        title: "Telegram",
        href: "",
        icon: <Telegram className='w-5 h-5' />,
    },
    {
        title: "Slack",
        href: "",
        icon: <Slack className='w-5 h-5' />,
    },
    {
        title: "Snapchat",
        href: "",
        icon: <Snapchat className='w-5 h-5' />,
    }
]

const SocialMedia = () => {
  return (
    <TooltipProvider>
        
    </TooltipProvider>
  )
}

export default SocialMedia;
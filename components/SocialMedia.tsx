import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import React from 'react'

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
    }
]

const SocialMedia = () => {
  return (
    <div>SocialMedia</div>
  )
}

export default SocialMedia;
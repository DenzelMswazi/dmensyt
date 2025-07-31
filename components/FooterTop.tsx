import { MapPin } from 'lucide-react';
import React from 'react'
import { FaBuilding, FaWhatsapp } from 'react-icons/fa';

interface ContactItemsData {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
}

const data: ContactItemsData[] = [
    {
        title: "Visit Us",
        subTitle: "Regus Suite 205, Kiambu Road.",
        icon: (
            <MapPin className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'/>
        ),
    },
    {
        title: "Whatsapp Us",
        subTitle: "+254 741 193 616",
        icon: (
            <FaWhatsapp className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'/>
        ),
    },
    {
        title: "Working Hours",
        subTitle: "Mon - Sat: 8:00 AM - 7:00 PM",
        icon: (
            <FaBuilding className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'/>
        )
    }
]

const FooterTop = () => {
  return (
    <div>FooterTop</div>
  )
}

export default FooterTop;
import { Mail, MapPin } from 'lucide-react';
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
        subTitle: "Regus Suite 205, Village Market - Kiambu Road.",
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
        ),
    },
    {
        title: "Email Us",
        subTitle: "dmens@sales.co.ke",
        icon: (
            <Mail className='h-6 w-6 text-gray-600 group-hover:text-primary transition-colors'/>
        )
    }
]

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
        {data.map((item, index) => (
           <div key={index} className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect'>
             {item?.icon}
             <div>
                <h3 className='font-semibold text-gray-900 group-hover:text-black hoverEffect'>{item?.title}</h3>
                <p className='text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect'>{item?.subTitle}</p>
             </div>
           </div>
        ))}
    </div>
  )
}


export default FooterTop;
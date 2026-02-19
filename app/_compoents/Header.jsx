import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const Header = () => {

    const Menu = [
        {
            id:1,
            name: 'Home',
            path:'/'
        },
        {
            id:2,
            name: 'Explore',
            path:'/explore'
        },
        {
            id:3,
            name: 'About',
            path:'/about'
        },
        {
            id:4,
            name: 'Contact',
            path:'/contact',
        }
    ]


    return (
        <div className='flex items-center justify-between gap-10 px-3 py-3 shadow-sm'>
            <div className='flex items-center gap-10 px-3 py-3'>
                <Image src="/logo.svg" alt="Logo" width={220} height={220} />

                <ul className='md:flex gap-14 hidden text-2xl font-medium'>
                    {Menu.map((item, index) => (
                        <li key={item.id}>
                            <a className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out' href={item.path}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
    )
}

export default Header
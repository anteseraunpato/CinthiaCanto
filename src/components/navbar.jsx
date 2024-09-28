"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion";


const links = [
    {url: "/", title:"Inicio"},
    {url: "/trayectoria", title:"Trayectoria"},
    {url: "https://wa.me/15551234567", title:"Contacto"},
    ];

const Navbar = () => {

    const [open, setOpen] = useState (false)

    const topVariants={
        closed:{
        rotate: 0,
        },

        opened: {
            rotate: 45,
            backgroundColor:"rgb(255,255,255)",
        },
    }

    const centerVariants={
        closed:{
        opacity: 1,
        },

        opened: {
            opacity: 0,
        },
    }

    const bottomVariants={
        closed:{
        rotate: 0,
        },

        opened: {
            rotate: -45,
            backgroundColor:"rgb(255,255,255)",
        },
    }

    const listVariants = {
        closed: {
            x:"100vw",
        },

        opened: {
            x: 0,
            transition:{
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    }

    const listItemVariants = {
        closed: {
            x: -100,
            opacity: 0,
        },

        opened: {
            x: 0,
            opacity: 1,
        },
    }


    
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/*Links */}
            <div className="hidden md:flex gap-6 w-1/3 justify-center font-normal text-white">
                {links.map (link=>(
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/* Logo */}
            <div className="lg:flex w-1/3  justify-center">
                <Link href="/" className="text-sm  rounded-md p-1 font-semibold flex items-center justify-center sm:justify-start">
                <Image src="/logo.jpg" alt="" width={40} height={40} className="object-contain rounded-full border-[#8978b6]"/>
                </Link>
            </div>
            {/*Redes sociales*/}
            <div className="hidden md:flex gap-4 w-1/3 justify-center">
                <Link href="/">
                <Image src="/facebook.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="/">
                <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="/">
                <Image className="bg-white rounded" src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col ml-3 justify-between z-[51] relative" onClick={(()=>setOpen(!open))}>
                    <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
                </button>

                {/* Items del menu*/}

                {open &&(
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-[#8978b6] text-white flex flex-col items-center justify-center gap-8 text-2xl z-50">
                    
                    {links.map(link => (
                        <motion.div variants={listItemVariants} key={link.title}>
                        <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
            </div>
        </div>
    )
}

export default Navbar
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    
    const pathName = usePathname();

    console.log(pathName);

    return (
        <Link className={`rounded pl-2 pr-2 pt-1 pb-1 ${pathName === link.url && "bg-white text-black font-semibold"}`} href={link.url}>
            {link.title}
        </Link>
    )
}

export default NavLink;
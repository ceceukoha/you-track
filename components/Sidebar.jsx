"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../src/assets/logo.jpg";
import Image from "next/image";
import links from "../utils/links";
import Link from "next/link";
import { Button } from "../components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-screen sm:w-full md:w-full">
      {/* <Image src={Logo} alt="logo" className="mx-auto  w-12 h-12" /> */}
      <span className="text-2xl font-extrabold text-black tracking-wide block text-center mt-4">YOU TRACK</span>
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link, index, array) => {
          console.log(index, array);
          return (
            <Button
              key={link.href}
              variant={pathname === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon}
                <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}

        {/* {links.map((link) => (
          <Button key={link.href} variant={pathname === link.href ? 'default' : 'link'}>
            <Link href={link.href} className="flex items-center gap-x-2">
              {link.icon}
              <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))} */}

        {/* {links.map((link)=>(
          <Button key={link.href} variant={pathname === link.href ? 'default': 'link'}>
            <Link href={link.href} className="flex items-center gap-x-2" >
            {link.icon}<span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))
        
        } */}
      </div>
    </aside>
  );
};

export default Sidebar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          alt="openImage"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={"/close.png"}
          alt="closeImage"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && <div className="bg-red-500 absolute text-white w-full top-24 left-0 h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8 z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=>{setOpen(false)}}>
            {item.title}
          </Link>
        ))}
        {!user ? (<Link href={"/login"} onClick={()=>{setOpen(false)}}>Login</Link>):(<Link href={"/orders"} onClick={()=>{setOpen(false)}}>Orders</Link>)}
        <CartIcon/>
      </div>}
    </div>
  );
};

export default Menu;

import { navbarLinks } from "@/data/NavbarLinks";
import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav>
      <ul className="hidden md:flex gap-10 list-parent ">
        {navbarLinks.map(({ id, title, link }) => (
          <Link href={link} key={id}>
            <li>{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

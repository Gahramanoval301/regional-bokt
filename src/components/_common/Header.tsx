"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Navbar from "../_layout/Navbar";
import SocialIcons from "../_layout/SocialIcons";
import MainMenuDropdown from "./MainMenuDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { navbarLinks } from "@/data/NavbarLinks";
import { useOutsideClick } from "@/hooks/useClickOutside";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useOutsideClick(dropdownRef, handleClose);
  return (
    <header className="bg-primary px-6 pt-6 pb-4">
      <div className="flex justify-around items-center gap-8 lg:gap-0">
        <Link href="/">
          <Image
            className="w-40 sm:w-60"
            src={"/common/regional_bokt.svg"}
            width={280}
            height={140}
            alt="Regional Bokt"
          />
        </Link>
        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="flex gap-6 items-center">
          <SocialIcons />
          <div className="block md:hidden mt-1" ref={dropdownRef}>
            <button
              type="button"
              className="border-none inline-flex w-full text-secondary-dark text-4xl"
              id="menu-button"
              aria-haspopup="true"
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <RxHamburgerMenu />
            </button>

            {open && (
              <MainMenuDropdown
                open={open}
                onClose={handleClose}
                links={navbarLinks}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface ILink {
  id: number;
  title: string;
  link: string;
}

interface MainMenuDropdownProps {
  open: boolean;
  onClose: () => void;
  links: ILink[];
}

const MainMenuDropdown: React.FC<MainMenuDropdownProps> = ({
  open,
  onClose,
  links,
}) => {
  if (!open) return null;

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative inline-block">
      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={dropdownVariants}
        transition={{ duration: 0.3 }} // Adjust duration as needed
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="flex flex-col">
          {links.map(({ id, title, link }: ILink) => (
            <Link
              key={id}
              href={link}
              role="menuitem"
              tabIndex={-1}
              onClick={onClose}
              className="menu-item"
            >
              {title}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenuDropdown;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialIcons = [
  {
    id: 0,
    imageUrl: "/common/facebook.svg",
    link: "",
  },
  {
    id: 1,
    imageUrl: "/common/instragram.svg",
    link: "",
  },
];
const SocialIcons = () => {
  return (
    <div className="flex gap-4 items-center">
      {socialIcons.map(({ id, link, imageUrl }) => (
        <Link key={id} href={link}>
          <Image className=" w-6 h-6 sm:w-8 sm:h-8" src={imageUrl} alt="social media" width={32} height={32} />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;

import { IProductCard } from "@/interfaces/IProductCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, title, imgUrl, link, features }: IProductCard) => {
  return (
    <Link href={link} className="hover:no-underline">
      <div key={id} className="rounded-3xl bg-accent-grey text-black">
        <div>
          <Image
            className="w-[100%]"
            src={imgUrl}
            alt={title}
            width={150}
            height={100}
          />
        </div>
        <h3 className="font-semibold text-lg mt-5 px-3 text-secondary-dark">
          {title}
        </h3>
        <div className="py-5 px-5">
          <ul className="min-h-48">
            {features.map((feature, id) => {
              return (
                <li className="list-disc" key={id}>
                  {feature}
                </li>
              );
            })}
          </ul>
          <p className="text-right font-semibold text-lg hover:underline hover:text-secondary-dark">Ətraflı</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

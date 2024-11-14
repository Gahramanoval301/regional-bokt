"use client";
import { IProductCard } from "@/interfaces/IProductCard";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import ModalManager from "../_common/ModalManager";

const ProductCard = ({ id, title, imgUrl, link, features }: IProductCard) => {
  const params = useSearchParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const formId = params.get("form");

  return (
    <div>
      <div key={id} className="rounded-3xl  bg-accent-grey dark:bg-gray-400 text-black">
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
          <Link
            href={link}
            className="block text-right font-semibold text-lg hover:underline hover:text-secondary-dark"
            onClick={() => setModalOpen(true)}
          >
            Ətraflı
          </Link>
        </div>
      </div>
      <ModalManager formId={formId} open={isModalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default ProductCard;

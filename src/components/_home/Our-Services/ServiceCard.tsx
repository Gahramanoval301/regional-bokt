import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IServiceCard {
  id: number;
  link: string;
  imgUrl: string;
  title: string;
}
interface IServiceCardProp {
  service: IServiceCard;
}

const ServiceCard = ({ service }: IServiceCardProp) => {
  return (
    <div className="mb-3">
      <Link href={service.link}>
        <div className="overflow-hidden">
          <Image
            className="w-full h-full mb-2 rounded-sm image-hover"
            src={service.imgUrl}
            alt={service.title}
            width={300}
            height={200}
          />
        </div>
        <h5>{service.title}</h5>
      </Link>
    </div>
  );
};

export default ServiceCard;

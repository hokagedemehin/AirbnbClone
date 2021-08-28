import React from "react";
import Image from "next/image";
export const MediumCard = ({ img, title }) => {
  // console.log(title);
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">
      <div className="relative h-60 w-60 md:h-80 md:w-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-lg mt-1 md:text-2xl md:mt-3">{title}</h3>
    </div>
  );
};

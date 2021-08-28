import React from "react";
import Image from "next/image";
export const SmallCard = ({ img, location, distance }) => {
  // console.log(img);
  return (
    <div className="flex item-center mt-3 space-x-2 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-300 ease-in-out">
      <div className="relative h-16 w-16 ">
        <Image src={img} alt={location} layout="fill" className="rounded-lg" />
      </div>
      <div className="text-xs flex flex-col justify-center ">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

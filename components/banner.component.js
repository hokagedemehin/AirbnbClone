import React from "react";
import Image from "next/image";
export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-large font-bold">
          Not Sure where to to? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-8 py-3 my-2 shadow-md font-bold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

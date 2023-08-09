import React from "react";
import AddCard from "../Buttons/AddCardBtn";

const Cards = ({ index, items }) => {
  return (
    <>
      <div
        key={index}
        className="relative h-[300px] w-[250px] md:h-[500px] md:w-[350px] shadow-xl  rounded-xl lg:rounded-3xl"
      >
        <img
          src={items.images[0]}
          alt={items.title}
          className="w-full h-[150px] md:w-[350px] md:h-[350px] mt-1 rounded-t-xl object-fill"
        />
        <p className="absolute top-[0.5%] rounded-bl-lg -left-1 p-2 rounded-tl-lg rounded-sm rounded-br-md rounded-tr-none z-10 capitalize text-[14px] font-semibold font-sans text-white bg-orange-400">
          {items.category}
        </p>
        <article className="block px-4 py-4 md:py-1.5">
          <span className="flex justify-between items-center">
            <h5 className=" truncate font-semibold font-serif text-[16px] md:text-[18px]">
              {items.title}
            </h5>
            <p className="block w-fit bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {items.rating}
            </p>
          </span>
          <p className="my-3 truncate block font-normal text-[14px] md:text-[16px]">
            {items.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex justify-center gap-x-1 items-center">
              <p className="text-xl md:text-3xl font-bold text-gray-900">
                ${items.price}
              </p>
              <sub className="text-[12px] text-red-700 font-normal">
                {items.discountPercentage}%
              </sub>
            </span>
            <AddCard />
          </div>
        </article>
      </div>
    </>
  );
};

export default Cards;

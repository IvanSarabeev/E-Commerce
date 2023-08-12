import React, { useState } from "react";
import AddCard from "../Button/AddCardButton";
import StarRating from "./StarRating";

const Cards = ({ index, items, productRating }) => {
  const [rating, setRating] = useState(productRating);

  const filledStar = Math.round(rating);

  const discountPercentage = items.discountPercentage / 100;
  const amount = items.price * discountPercentage;
  const totalAmount = (items.price - amount).toFixed(2);

  return (
    <>
      <div
        key={index}
        className="relative z-0 h-[300px] w-[250px] sm:h-[400px] sm:w-[325px] md:h-[450px] md:w-[300px] lg:h-[495px] shadow-xl rounded-xl lg:rounded-3xl"
      >
        <img
          src={items.thumbnail}
          alt={items.title}
          className="w-full h-[150px] sm:w-[325px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mt-1 rounded-t-xl object-fill"
        />
        <p className="absolute top-[0.5%] rounded-bl-lg -left-1 p-2 rounded-tl-lg rounded-sm rounded-br-md rounded-tr-none z-10 capitalize text-[14px] font-semibold font-sans text-white bg-orange-400">
          {items.category}
        </p>
        <article className="block px-4 py-4 md:py-1.5">
          <span className="flex justify-between items-center">
            <h5 className=" truncate font-semibold font-serif text-[16px] md:text-[18px]">
              {items.title}
            </h5>
            <StarRating filledStar={filledStar} />
          </span>
          <p className="my-3 truncate block font-normal text-[14px] md:text-[16px] antialiased">
            {items.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="flex justify-center gap-x-1 items-stretch">
              <p className="text-xl md:text-3xl font-bold text-gray-900">
                ${totalAmount}
              </p>
              <sub className="text-[10px] text-red-700 font-normal mt-2">
                %{items.discountPercentage}
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

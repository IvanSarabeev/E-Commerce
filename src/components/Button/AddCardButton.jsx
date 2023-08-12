import React from "react";
import { useToast } from "../Toast/ToastService";
import IconCheck from "../../icons/CheckIcon";
import CartIcon from "../../icons/CartIcon";

const AddCard = () => {
  const toast = useToast();

  const handleAdded = () => {
    const id = toast.open(
      <div className="px-5 py-2 flex gap-4 justify-center items-center bg-green-200 text-green-800/80 rounded-lg shadow-lg">
        <IconCheck />
        <div>
          <h3 className="font-bold">Added to cart</h3>
          <p className="text-sm">Product added to cart</p>
        </div>
      </div>,
      1000
    );
    toast.close(id);
  };

  return (
    <>
      <button onClick={handleAdded}>
        <a
          href="https://"
          className="text-white flex items-center space-x-4 gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <CartIcon />
          Cart
        </a>
      </button>
    </>
  );
};

export default AddCard;

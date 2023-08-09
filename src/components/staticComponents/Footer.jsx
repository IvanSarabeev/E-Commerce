import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-400 py-2">
      <div className="flex justify-center items-center w-1/2 text-gray-600">
        <div>
          <h4 className="capitalize font-semibold text-xl mb-2 text-black marker:text-sky-400 list-disc">
            Quick Links
          </h4>
          <p className=" indent-2 md:indent-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            ipsam quaerat voluptate non magni ducimus distinctio quibusdam
            necessitatibus molestiae.
          </p>
        </div>
        <div>
          <h4 className="capitalize font-semibold text-xl mb-2 text-black marker:text-sky-400 list-disc">
            T&C
          </h4>
          <p className=" indent-2 md:indent-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            ipsam quaerat voluptate non magni ducimus distinctio quibusdam
            necessitatibus molestiae.
          </p>
        </div>
        <div>
          <h4 className="capitalize font-semibold text-xl mb-2 text-black marker:text-sky-400 list-disc">
            Privacy Policy
          </h4>
          <p className=" indent-2 md:indent-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            ipsam quaerat voluptate non magni ducimus distinctio quibusdam
            necessitatibus molestiae.
          </p>
        </div>
        <div>
          <h4 className="capitalize font-semibold text-xl mb-2 text-black marker:text-sky-400 list-disc">
            Contact Us
          </h4>
          <p className="font-normal indent-2 md:indent-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            ipsam quaerat voluptate non magni ducimus distinctio quibusdam
            necessitatibus molestiae.
          </p>
        </div>
      </div>
      <div className="mt-6 mb-2 md:mt-8 md:mb-4 font-medium text-xs sm:text-[14px] md:text-[16px]">
        &copy; E-Commerce 2023/2024
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import ToastContext from "./ToastService";
import Xmark from "../../icons/XmarkIcon";

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState([]);

  const open = (component, timeout = 3000) => {
    const id = Date.now();
    setToast((toast) => [...toast, { id, component }]);

    setTimeout(() => close(id), timeout);
    return id;
  };

  const close = (id) =>
    setToast((currentToast) =>
      currentToast.filter((currentToast) => currentToast.id === id)
    );

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 fixed flex w-fit bottom-[15%] left-[85%] z-10 ring-transparent">
        {toast.map(({ id, component }) => (
          <div key={id} className="relative">
            <button
              onClick={() => close(id)}
              className="rounded-full absolute right-2 top-2 ring-2 hover:bg-red-600/95 hover:text-black hover:ring-offset-black p-0.5 hover:ring-0 outline-1 hover:outline-gray-800 hover:outline-2 bg-gray-200/20 text-gray-800/60"
            >
              <Xmark />
            </button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

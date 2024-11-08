"use client";
import { IMainModal } from "@/interfaces/IMainModal";
import React from "react";
import { IoMdClose } from "react-icons/io";

const MainModal = ({open, setOpen, Component}:IMainModal) => {

  return (
    <div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative p-4 w-full max-w-lg max-h-[98vh] overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700 transparent-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                KREDİT ƏLDƏ ETMƏK ÜÇÜN SORĞU
              </h3>
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <IoMdClose />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <Component/>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainModal;

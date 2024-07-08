import React from "react";

export const SignUpForOurNext = () => {
  return (
    <div className="grid grid-cols-2 py-20 max-w-7xl mx-auto relative">
      {" "}
      <div>
        <img
          className=" rounded-xl"
          src="https://www.shutterstock.com/image-photo/loyal-dog-looking-female-owner-600nw-2044400042.jpg"
          alt="image"
        />
      </div>
      <div className="bg-sky-800"></div>
      <div className="absolute max-w-3xl grid grid-cols-3 gap-10 top-1/3 p-10 left-1/3 rounded-2xl bg-white">
        <div className="flex  flex-col gap-3">
          <p className="shadow-2xl rounded-xl flex justify-center p-3 text-5xl  text-gray-800 font-bold">
            02
          </p>
          <p className="text-3xl text-gray-800">days to go</p>
        </div>
        <div className="flex col-span-2  flex-col gap-8">
          <span className="text-3xl font-bold text-gray-800">
            {" "}
            days to go Sign up for our next online Open Event
          </span>
          <span className="text-xl text-gray-800">
            Wednesday 10th July 2024 - 9:00am UK time.
          </span>
        </div>
      </div>
    </div>
  );
};

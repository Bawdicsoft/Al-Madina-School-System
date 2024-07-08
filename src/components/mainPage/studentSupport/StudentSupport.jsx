import React from "react";

export const StudentSupport = () => {
  return (
    <div className="grid grid-cols-2 bg-slate-100 py-32 px-20 gap-10 mt-20">
      <div>
        <img
          className="-rotate-6 rounded-xl"
          src="https://www.shutterstock.com/image-photo/loyal-dog-looking-female-owner-600nw-2044400042.jpg"
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-blue-500 w-40 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
          Student Support
        </p>
        <p className="text-4xl font-bold text-zinc-800">
          Prioritising student wellbeing
        </p>
        <p className="text-md text-gray-700 font-bold">
          Every student should feel nurtured, celebrated, and supported to learn
          and grow, which is why wellbeing is our utmost priority at King’s
          InterHigh.
        </p>
      </div>
    </div>
  );
};

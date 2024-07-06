import React from "react";
import { BorderButton } from "../borderButton/BorderButton";

export const SchoolTrust = () => {
  return (
    <div className="mx-auto max-w-6xl py-16">
      <div className="flex gap-5 max-w-4xl mx-auto flex-col items-center">
        <p className="font-bold text-blue-500 py-2 px-4 border-1 border-sky-400 rounded-full bg-slate-200">
          A school you can trust
        </p>
        <p className="text-4xl font-bold text-center text-gray-800">
          We are the original online school, where learning revolves around
          every unique student.
        </p>
        <BorderButton link="/" title={"Our School"} />
      </div>
      <div className="grid grid-cols-3 gap-8 pt-28">
        <div className="bg-yellow-400 text-gray-800 gap-5 -rotate-6 p-8 rounded-full w-96 h-96 flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">19 years</p>
          <p className="text-3xl font-semibold text-center">
            of experience in delivering unrivalled online schooling
          </p>
        </div>
        <div className="bg-orange-600 text-gray-100  gap-5 rotate-6 p-8 rounded-full w-96 h-96 flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">11,500+</p>
          <p className="text-3xl font-semibold text-center">
            successful alumni and counting
          </p>
        </div>
        <div className="bg-green-600 text-gray-100  gap-5 rotate-3 p-8 rounded-full w-96 h-96 flex flex-col justify-center items-center">
          <p className="text-5xl font-bold">5 decades</p>
          <p className="text-3xl font-semibold text-center">
            of excellence from King's College schools
          </p>
        </div>
      </div>
    </div>
  );
};

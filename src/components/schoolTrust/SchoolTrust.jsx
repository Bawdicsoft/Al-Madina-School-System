import React from "react";
import { BorderButton } from "../borderButton/BorderButton";
import { AboutSchool } from "../school/AboutSchool";

export const SchoolTrust = () => {
  return (
    <div className="mx-auto max-w-6xl py-16 ">
      <AboutSchool
        buttonTile="Our School"
        title="   A school you can trust"
        subtitle="We are the original online school, where learning revolves around every unique student."
      />
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

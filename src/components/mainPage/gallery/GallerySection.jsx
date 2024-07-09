import AnimationBottom from "@/components/animations/AnimationBottom";
import AnimationTop from "@/components/animations/AnimationTop";
import { Button } from "@/components/button/Button";
import Link from "next/link";
import React from "react";

export const GallerySection = () => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mx-auto max-w-7xl pt-10 pb-20">
        <AnimationBottom>
          <div className="w-full h-[500px] relative ">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
            />
            <div className="absolute top-16  left-10">
              <Link
                className="bg-gray-500 text-gray-200 p-3 rounded-full hover:scale-105 transition duration-1000"
                href={"/"}
              >
                Feature Article
              </Link>
            </div>
            <div className="absolute top-1/2 left-20 right-0 bg-white p-8">
              <Link
                className="flex gap-4 flex-col text-gray-800 p-3 rounded-full"
                href={"/"}
              >
                <span className="">27/06/2024</span>
                <span className="text-2xl text-gray-800">
                  Award-winning actress Lillia Turner- Star on screen, online
                  student backstage
                </span>
              </Link>
            </div>
          </div>
        </AnimationBottom>
        <AnimationTop>
          <div className="w-full h-[500px] relative">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
            />
            <div className="absolute bottom-10 left-1/3">
              <Button title={"Read Article"} link={"/"} />
            </div>
          </div>
        </AnimationTop>
      </div>
      <AnimationBottom>
        <div className="grid grid-cols-3 max-w-6xl mx-auto">
          <div className="w-[360px] h-[250px] relative">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
            />
            <span className="absolute  -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-10">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
          <div className="w-[360px] h-[250px] relative">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
            />
            <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-10">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
          <div className="w-[360px] h-[250px] relative">
            <img
              className="w-full h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_Wu3kn4jBTRs26a-DaTaKDL3Yn4SfJdDOQ&s"
            />
            <span className="absolute -bottom-7 -left-2 bg-white w-40 flex justify-center items-center rounded-[50px] pt-6 pb-10 ">
              20/02/2024
            </span>
            <p className="pt-5 text-lg font-semibold">
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
          </div>
        </div>
      </AnimationBottom>
    </div>
  );
};

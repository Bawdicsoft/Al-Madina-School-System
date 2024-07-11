"use client";
import { GoArrowDown } from "react-icons/go";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import AnimationBottom from "@/components/animations/AnimationBottom";
import AnimationTop from "@/components/animations/AnimationTop";
import AnimationPopUp from "@/components/animations/AnimationPopup";
import { motion } from "framer-motion";
import { Button } from "../button/Button";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="pt-5 mt-28 ">
      <div className="relative isolate px-6 lg:px-8 ">
        <div
          className="max-w-7xl rounded-[40px] relative pt-48 mx-auto"
          style={{
            backgroundImage: "url(./bannerHero.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <AnimationBottom>
            <Image
              src={"/heroSecImg.png"}
              className="mx-auto w-7/12 h-90"
              alt="heroImage"
              width={900}
              height={200}
            ></Image>
          </AnimationBottom>

          <div className="absolute md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-11/12  sm:py-20">
            <div className="text-center">
              <AnimationPopUp>
                <h1 className="text-lg font-semibold tracking-tight text-white md:text-3xl lg:text-5xl">
                  Academic Excellence Meets Islamic Values – Learn Anywhere,
                  Anytime.
                </h1>
              </AnimationPopUp>
              <p className="mt-6 text-lg md:text-2xl font-semibold leading-8 text-gray-200">
                19: Building Brighter Futures through Faith and Virtual
                Learning.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <AnimationTop>
                  <Button link={"/"} title={"Join Our next open event"} />
                </AnimationTop>
              </div>
            </div>
            <div className="flex justify-center items-center pt-16">
              <ScrollLink
                to="key-Stages" // This should match the ID of the element you want to scroll to
                smooth={true}
                duration={600}
                offset={-80} // Adjust this offset based on your layout
                className="cursor-pointer"
              >
                <AnimationTop>
                  <div className="bg-white flex justify-center items-center p-3 md:p-4 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-full transition duration-1000 hover:scale-110">
                    <GoArrowDown className=" w-8 h-8 text-gray-600" />
                  </div>
                </AnimationTop>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

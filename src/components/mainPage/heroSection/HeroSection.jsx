"use client";
import { GoArrowDown } from "react-icons/go";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Button } from "@/components/button/Button";
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
          <Image
            src={"/heroSecImg.png"}
            className="mx-auto w-7/12 h-90"
            alt="heroImage"
            width={900}
            height={200}
          ></Image>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto w-11/12 py-64 sm:py-20">
            <div className="text-center">
              <h1 className="text-xl font-semibold tracking-tight text-white sm:text-5xl">
                Academic Excellence Meets Islamic Values – Learn Anywhere,
                Anytime.
              </h1>
              <p className="mt-6 text-2xl font-semibold leading-8 text-gray-200">
                19: Building Brighter Futures through Faith and Virtual
                Learning.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button link={"/"} title={"Join Our next open event"} />
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
                <div className="bg-white p-4 w-16 h-16 rounded-full transition duration-1000 hover:scale-110">
                  <GoArrowDown className="w-8 h-8 text-gray-600" />
                </div>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import bannerBg from "@/assets/images/banner.png";
import arrowT from "@/assets/images/Group 12898.png";
import buildingImg from "@/assets/images/Image 1.png";
import linkIcon from "@/assets/images/link.png";

const data = ["Lorem Ipsum (IS 4985)"];

const HeroSection = () => {
  const [isIndex, setIsIndex] = useState<number | null>(null);
  return (
    <section className="flex w-full relative  min-h-svh overflow-hidden">
      <Image
        src={bannerBg}
        alt=" "
        fill
        placeholder="blur"
        loading="eager"
        className="-z-10 object-cover"
      />
      <div className="max-w-[1540px] mx-auto flex flex-col justify-between gap-40 items-center text-white">
        <div></div>
        <div>
          <h1 className="lg:text-[52px] text-4xl font-bold text-center">
            Reliable PVC Pipes for Every Need
          </h1>
          <p className="text-center lg:text-xl text-lg font-medium mt-1">
            Presenting an All Rounder For Your Water Management
          </p>
        </div>
        <menu className="lg:grid grid-flow-col flex w-full flex-wrap justify-evenly gap-px  ">
          {Array.from({ length: 7 }).map((_, i) => (
            <Fragment key={i}>
              {data.map((item, index) => (
                <li
                  onClick={() => setIsIndex(isIndex === i ? null : i)}
                  key={index}
                  className={`text-center lg:px-5 px-2 lg:pt-20  lg:pb-5 py-3 relative z-0  max-lg:text-sm cursor-pointer bg-[linear-gradient(180deg,#2A60EB00_0%,#f1f1f12b_100%)] hover:bg-[linear-gradient(180deg,#2A60EB00_0%,#1853EA_100%)] duration-300 group ${
                    isIndex === i &&
                    "!bg-[linear-gradient(180deg,#2A60EB00_0%,#1853EA_100%)]"
                  }`}
                >
                  {item}
                  <Image
                    src={arrowT}
                    alt=""
                    className={`absolute top-5 left-1/2 -translate-x-1/2 lg:h-[20px] h-4 w-auto object-contain group-hover:opacity-100 opacity-0 max-lg:hidden ${
                      isIndex === i && "!opacity-100"
                    }`}
                  />

                  {isIndex === i && (
                    <span
                      className={`w-[max(300px,100%)] absolute bottom-full text-start lg:left-1/2 left-0 bg-white  lg:p-6 p-4 rounded-t-lg rounded-br-lg  duration-300 starting:translate-y-7 transition-discrete starting:opacity-0   ${
                        i >= 5 ? "transform lg:-translate-x-full" : ""
                      }`}
                    >
                      <Image
                        src={buildingImg}
                        alt=""
                        className={` lg:h-[83px] h-16 w-auto object-contain `}
                      />
                      <h3 className="text-[#000000] lg:mt-6 mt-4 font-bold">
                        Lorem Ipsum is simply
                      </h3>
                      <p className="text-[#363636] lg:text-sm text-xs font-medium lg:mt-2 mt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;
                      </p>
                      <Image
                        src={linkIcon}
                        alt=""
                        className={` h-[12px] w-auto object-contain lg:mt-10 mt-6`}
                      />
                    </span>
                  )}
                </li>
              ))}
            </Fragment>
          ))}
        </menu>
      </div>
    </section>
  );
};

export default HeroSection;

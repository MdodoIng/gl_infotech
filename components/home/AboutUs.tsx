import Image from "next/image";
import React from "react";
import main_padding from "@/styles/padding";
import pipesImg from "@/assets/images/Pipes (4)a.png";
import linkIcon from "@/assets/images/link.png";
import fourteenImg from "@/assets/images/Group 4.png";

const AboutUs = () => {
  return (
    <section
      className={`wrapper grid xl:grid-cols-3 md:grid-cols-2 max-xl:items-center gap-10 ${main_padding.y}`}
    >
      <Image
        src={pipesImg}
        alt=""
        className="object-contain object-bottom max-xl:order-3"
      />
      <div className="flex flex-col max-xl:col-span-2">
        <h2 className="lg:text-4xl text-3xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </h2>
        <h3 className="lg:text-xl text-lg font-bold lg:mt-5 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </h3>
        <p className="lg:mb-10 mb-6 lg:mt-5 mt-3 font-medium lg:text-lg text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button className="flex items-center justify-start font-bold text-sm gap-3 mt-auto text-[#D12A24] ">
          Explore More{" "}
          <Image
            src={linkIcon}
            alt=""
            className="h-[13px] w-auto object-contain"
          />{" "}
        </button>
      </div>
      <div className="flex flex-col items-center justify-start max-md:col-span-2">
        <Image
          src={fourteenImg}
          alt=""
          className=" w-[min(250px,100%)] h-auto object-contain"
        />
        <h3 className="mt-3 font-bold text-[#D12A24] lg:text-[30px] text-2xl">
          Years of excellence
        </h3>
        <p className="font-medium text-center lg:text-xl text-lg max-w-[30ch]">
          The <br /> one of the leading manufacturers and traders in the
          plastics sector, was established in.
        </p>
        <span className="bg-gradient-to-l from-[#0133A5]  to-[#386AEB] text-white font-bold lg:text-[28px] text-2xl lg:p-4 p-2 w-full text-center lg:rounded-[20px] rounded-2xl lg:mt-10 mt-4">
          Since 1981
        </span>
      </div>
    </section>
  );
};

export default AboutUs;

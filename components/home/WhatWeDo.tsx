import main_padding from "@/styles/padding";
import Image from "next/image";
import bgImage from "@/assets/images/Group 12896.png";
import mapImg from "@/assets/images/Group 280.png";

const WhatWeDo = () => {
  return (
    <section className={`${main_padding.y} relative z-0 text-white flex`}>
      <div className="wrapper grid md:grid-cols-2 lg:gap-20 gap-10 items-center 2xl:mb-20 mb-10">
        <div className="flex flex-col">
          <h2 className="2xl:text-[90px] lg:text-6xl text-4xl font-bold tracking-[-1.77px] leading-[100%]">
            We Spread <br />
            <small className="font-medium 2xl:text-[60px] lg:text-5xl text-3xl">
              Around
            </small>{" "}
            India
          </h2>
          <p className="font-medium 2xl:mt-4 lg:mt-3 mt-2 mb-10  lg:text-lg text-base md:max-w-[40ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
          </p>

          <h3 className="mt-auto 2xl:text-[60px] lg:text-5xl text-3xl font-bold leading-[100%] lg:pb-3 mb-2 relative z-0 after:absolute after:w-1/3 after:2xl:h-[5px] after:h-[3px] after:bg-white after:left-0 after:bottom-0 after:rounded-full after:-z-[5]  after:translate-x-10 before:absolute before:w-1/3 before:2xl:h-[5px]  before:h-[3px] before:bg-[#1853EA] before:left-0 before:bottom-0 before:rounded-full before:-z-10">
            Lorem Ipsum is simply
          </h3>
          <p className="2xl:mt-6 mt-4 font-medium lg:text-lg text-base  md:max-w-[40ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> <br /> Lorem Ipsum has been the industry&apos;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley
          </p>
        </div>
        <Image src={mapImg} alt="" className="w-full h-auto object-contain" />
      </div>

      <Image src={bgImage} alt="" fill className="-z-10 object-cover" />
    </section>
  );
};

export default WhatWeDo;

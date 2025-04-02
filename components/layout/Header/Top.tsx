import Svg2553 from "@/assets/images/svg2553";
import Image from "next/image";
import callIcon from "@/assets/images/call.png";
import mailIcon from "@/assets/images/mail.png";
import downlodeIcon from "@/assets/images/downld.png";

const Top = () => {
  return (
    <div className="grid 2xl:grid-cols-[.5fr_1fr_1fr] lg:grid-cols-[.4fr_.6fr_1fr] bg-white  wrapper  relative z-0">
      <div className="py-3 bg-white max-lg:hidden" />
      <div
        style={{
          filter: "drop-shadow(-2px 0px 0px  #00000063)",
        }}
        className="py-3 bg-[#B8C8EB] relative z-0 max-lg:hidden"
      >
        <Svg2553 className="text-[#B8C8EB] absolute h-full w-max -translate-x-full left-4 -z-10 top-0" />
      </div>
      <div
        style={{
          filter: "drop-shadow(-2px 0px 0px  #00000063)",
        }}
        className="py-3 px-4 sbg-[#004FFF] relative z-0 flex items-center gap-10 justify-between text-white max-md:flex-wrap max-md:gap-2 max-md:justify-center"
      >
        <Svg2553 className="text-[#004FFF] absolute h-full w-max -translate-x-full left-4 -z-10 top-0 max-lg:hidden" />
        <div className="flex items-center gap-6">
          <a href="" className="flex items-center gap-1 text-sm">
            <Image
              src={callIcon}
              alt=""
              width={20}
              height={20}
              className="size-[13px] object-contain"
            />
            <p>0487 - 2354542</p>
          </a>
          <a href="" className="flex items-center gap-1 text-sm">
            <Image
              src={mailIcon}
              alt=""
              width={20}
              height={20}
              className="size-[13px] object-contain"
            />
            <p>info@loremipsum</p>
          </a>
        </div>
        <a href="" className="flex items-center gap-1 text-sm">
          <Image
            src={downlodeIcon}
            alt=""
            width={20}
            height={20}
            className="size-[13px] object-contain"
          />
          <p>Download brochure</p>
        </a>
      </div>

      {/* bg blue */}
      <span className="bg-[#004FFF] w-[100vw] absolute h-full -z-10 left-1/2  max-lg:-translate-x-1/2" />
    </div>
  );
};

export default Top;

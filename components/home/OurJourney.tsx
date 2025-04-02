import main_padding from "@/styles/padding";
import Image from "next/image";
import bgImage from "@/assets/images/Group 12897.png";

const data = [
  {
    title: "Our Employees",
    content: "500+",
  },
  {
    title: "Years Of Experience",
    content: "40+",
  },
  {
    title: "Delivered Packages",
    content: "14050+",
  },
  {
    title: "Satisfied Clients",
    content: "850+",
  },
];

const OurJourney = () => {
  return (
    <section className={`${main_padding.y} relative z-0 text-white flex w-full`}>
      <div className="wrapper flex items-center justify-center flex-col ">
        <menu className="w-[min(1000px,100%)] flex lg:justify-between justify-center xl:gap-20 md:gap-10 gap-6 flex-wrap">
          {data.map((item, idx) => (
            <li key={idx} className="flex items-center flex-col gap-2 text-center justify-center p-4 h-auto bg-[#000000]/[28%] border border-[#707070] max-md:w-full">
              <p className="font-medium xl:text-xl text-lg leading-[100%]">{item.title}</p>
              <b className="font-bold lg:text-[60px] text-5xl" >{item.content}</b>
            </li>
          ))}
        </menu>
        <h2 className="lg:text-[50px] text-4xl tracking-[-1.25px] text-[#FFFFFF]/[55%] leading-[100%] font-bold text-center [&_span]:font-light md:mt-10 mt-4">
          <span>Doing the</span> right thing, at the right time <span>us</span>
        </h2>
      </div>

      <Image src={bgImage} alt="" fill className="-z-10 object-cover" />
    </section>
  );
};

export default OurJourney
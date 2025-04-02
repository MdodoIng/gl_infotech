"use client";
import group12893 from "@/assets/images/Group 12893.png";
import group12894 from "@/assets/images/Group 12894.png";
import group12895 from "@/assets/images/Group 12895.png";
import group19983 from "@/assets/images/icon.png";
import bgImg from "@/assets/images/Group 12892.png";
import Image from "next/image";
import main_padding from "@/styles/padding";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";

const data = [
  {
    title: "Integrity",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group19983,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Innovation",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12893,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Empowerment",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12894,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Customer Centrality",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12895,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Customer Centrality",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12895,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Customer Centrality",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12895,
    bgColor: generateSimilarColor("#2145A4"),
  },
  {
    title: "Customer Centrality",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    icon: group12895,
    bgColor: generateSimilarColor("#2145A4"),
  },
];

function generateSimilarColor(hex: string, variation: number = 10) {
  // Convert hex to RGB
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  // Generate new RGB values with slight variations
  r = Math.min(
    255,
    Math.max(0, r + (Math.random() * variation * 2 - variation))
  );

  g = Math.min(
    255,
    Math.max(0, g + (Math.random() * variation * 2 - variation))
  );
  b = Math.min(
    255,
    Math.max(0, b + (Math.random() * variation * 2 - variation))
  );

  // Convert back to hex
  return `#${((1 << 24) | (r << 16) | (g << 8) | b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

const Services = () => {
  return (
    <div className={`${main_padding.b}`}>
      <section
        className={`wrapper relative z-0 ${main_padding.y} rounded-[50px] overflow-hidden ${main_padding.x} flex flex-col items-center justify-center text-white`}
      >
        <h2 className="text-center 2xl:text-[60px] lg:text-5xl text-4xl font-bold leading-[44px]">
          Lorem Ipsum <br />
          <span className="font-medium text-[40px]">Lorem</span>
        </h2>
        <p className="font-medium mt-4 lg:text-lg text-base text-center max-w-[80ch]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley
        </p>

        <div className=" mt-10 w-full flex flex-col">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              clickable: true,

              el: ".swiper-pagination",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1340: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="w-full !flex "
          >
            {data.map((item, idx) => (
              <SwiperSlide
                key={idx}
                style={{
                  backgroundColor: item.bgColor,
                }}
                className="w-full rounded-[30px] rounded-tl-none px-6 lg:pt-20 pt-14 pb-6 relative z-0  mt-2  !h-auto"
              >
                <Image
                  src={item.icon}
                  alt=""
                  className="absolute -top-2 lg:-right-2 right-0 lg:size-[80px] size-16"
                />
                <h3 className="font-bold lg:text-[26px] text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 font-medium lg:text-lg text-base">
                  {item.content}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Image src={bgImg} alt="" fill className="-z-10 object-cover" />
      </section>
    </div>
  );
};

export default Services;

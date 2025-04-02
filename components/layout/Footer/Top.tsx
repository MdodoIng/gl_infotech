import Image from "next/image";
import React from "react";
import logo from "@/assets/images/gl-final-logo.png";
import linkIcon from "@/assets/images/link.png";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import group54 from "@/assets/images/Group 54.png";
import group55 from "@/assets/images/Group 55.png";
import group57 from "@/assets/images/Group 57.png";
import group59 from "@/assets/images/Group 59.png";

const useFullLinks = [
  "Home",
  "About Us",
  "QHSE",
  "Our Products",
  "Gallery",
  "Services",
  "Career",
  "Contact Us",
];

const socialMedia = [group54, group55, group57, group59];

const Top = () => {
  return (
    <menu
      className={` wrapper flex items-start justify-between 2xl:gap-40 lg:gap-20 gap-10 max-lg:flex-wrap`}
    >
      <li className="text-[#B9B9B9] shrink-0">
        <Image
          src={logo}
          alt=""
          width={300}
          height={47}
          className="h-[44px] w-auto object-contain"
        />
        <p className="lg:text-[28px] text-2xl max-w-[20ch] font-bold leading-6 lg:mt-10 mt-6">
          Lorem Ipsum is simply Lorem Ipsum is.
        </p>
        <small className="font-medium lg:text-base text-sm">
          INDUSTRIAL SUPPLIES PROVIDER
        </small>

        <p className=" max-w-[28ch] font-medium max-lg:text-sm lg:mt-6 mt-4 lg:mb-10 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>

        <button className="flex items-center justify-center text-sm gap-3 mt-auto">
          Explore More
          <Image
            src={linkIcon}
            alt=""
            width={300}
            height={47}
            className="h-[12px] w-auto object-contain brightness-[500%] saturate-0 contrast-200"
          />
        </button>
      </li>

      <menu className="lg:grid grid-cols-3 flex flex-wrap justify-between lg:gap-20 md:gap-10 gap-6">
        <LinkComponent title="Useful links" link={useFullLinks} />
        <li className=" flex flex-col lg:gap-6 gap-4">
          <LinkComponent
            title="Address"
            link="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy"
          />
          <LinkComponent
            className="gap-2"
            title="Send your mail at"
            link="info@LoremIpsum.com"
          />
          <LinkComponent
            className="gap-2"
            title="Have Any Question"
            link={["(P): +91 9526545633", "(M): +91 9446050201"]}
          />
        </li>
        <li className={"flex items-start lg:gap-6 gap-2  flex-col "}>
          <h2 className="text-xl font-bold">Connect with us</h2>
          <div className="flex gap-3 font-medium text-[#B9B9B9]">
            {socialMedia.map((l, i) => (
              <Link key={i} href={""}>
                <Image
                  src={l}
                  alt=""
                  width={35}
                  height={35}
                  className="h-[35px] w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </li>
      </menu>
    </menu>
  );
};

interface LinkComponentProps {
  link: string[] | string;
  title: string;
}

const LinkComponent: React.FC<
  LinkComponentProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { link, title } = props;
  const linkArray = Array.isArray(link) ? link : [link];
  return (
    <div
      {...props}
      className={twMerge(
        "flex items-start lg:gap-6 gap-2  flex-col",
        props.className
      )}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="grid lg:gap-3 gap-1 font-medium text-[#B9B9B9] max-w-[24ch]">
        {linkArray.map((l, i) => (
          <Link key={i} href={""}>
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Top;

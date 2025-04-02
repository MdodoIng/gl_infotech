import Link from "next/link";
import logo from "@/assets/images/gl-final-logo.png";
import max from "@/assets/images/Group 12682.png";
import wsp from "@/assets/images/wsp.png";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "QHSE", href: "/qhse" },
  { name: "Our Products", href: "/our-products", megaMenu: true },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact-us" },
];

const Bottom = () => {
  const isActive = 0;
  return (
    <div className="wrapper py-4 flex items-center justify-between gap-10">
      <Link href="/">
        <Image
          src={logo}
          alt=""
          height={44}
          width={200}
          className="h-[44px] w-auto object-contain"
          loading="eager"
        />
      </Link>

      <ul className="flex items-center gap-6 max-lg:hidden">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className={`text-[#000000] xl:text-[16px] text-sm relative z-0 ${
                isActive === idx
                  ? "font-bold after:absolute after:w-4 after:h-[2px] after:bg-[#004FFF] after:bottom-0 after:left-0 "
                  : "font-medium"
              }`}
            >
              {link.name}
              {link.megaMenu && (
                <span className="text-[16px] text-[#D12A24] "> ⯆</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <menu className="flex items-center gap-6 max-lg:hidden">
        <Image
          src={max}
          alt=""
          height={44}
          width={200}
          className="h-[40px] w-auto object-contain max-2xl:hidden"
          loading="eager"
        />

        <Link
          href={""}
          className="text-black bg-[#EBEBEB] px-5 py-3 h-full text-[16px] font-medium text-center rounded-full shrink-0 max-xl:hidden"
        >
          Quick Enquiry
        </Link>
        <Link
          href={""}
          className="text-black flex items-center text-[16px] font-medium rounded-full shrink-0 gap-4 "
        >
          <Image
            src={wsp}
            alt=""
            height={44}
            width={200}
            className="h-[32px] w-auto object-contain"
            loading="eager"
          />
          <div className="flex flex-col justify-start max-xl:hidden">
            <span className="text-sm">Whatsapp Helpline</span>
            <p className="font-bold">9353325322</p>
          </div>
        </Link>
      </menu>

      <MobileMenu links={links!} />
    </div>
  );
};

export default Bottom;

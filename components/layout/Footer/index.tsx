import main_padding from "@/styles/padding";
import Bottom from "./Bottom";
import Top from "./Top";
import brTImg from "@/assets/images/Group 12284.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url('${brTImg.src}')` }}
      className={` bg-contain bg-repeat-x bg-top bg-[#000000] text-white ${main_padding.t} lg:gap-12 gap-8 grid`}
    >
      <Top />
      <Bottom />
    </footer>
  );
};

export default Footer;

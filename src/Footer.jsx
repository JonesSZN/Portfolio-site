import { ArrowRight } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Globe } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000410] py-12 lg:py-24 w-full flex justify-center">
      <div className="lg:w-[60%] w-[90%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row flex flex-col gap-8 lg:gap-16">
          <LeftFooter />
          <MiddleFooter />
          <RightFooter />
        </div>
      </div>
    </footer>
  );
};

const LeftFooter = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="text-white font-bold text-[18px]">ABOUT ME</h2>
      <p className="text-[14px] text-[#777777]">
        Do you want to be even more successful? Learn to love learning and
        growth. The more effort you put into improving your skills,
      </p>
      <p className="text-[14px] text-[#777777]">
        Copyright ©2024 All rights reserved | This template is made with by
        <span className="text-[#8490ff]">Colorlib</span>
      </p>
    </div>
  );
};
const MiddleFooter = () => {
  return (
    <div className="w-full">
      <h2 className="text-white font-bold text-[18px] mb-[26px]">NEWSLETTER</h2>
      <p className="mb-4 text-[14px] text-[#777777]">
        Stay updated with our latest trends
      </p>
      <div className="px-[15px] bg-white py-2 flex items-center justify-between">
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Email Address"
        />
        <ArrowRight />
      </div>
    </div>
  );
};

const RightFooter = () => {
  return (
    <div className="w-1/2">
      <h2 className="mb-6 text-white font-bold text-[18px]">FOLLOW ME</h2>
      <p className="mb-2 text-[#777777] text-[14px]">Let us be social</p>
      <Socials />
    </div>
  );
};

const Socials = () => {
  const SocialArray = [
    <Facebook fill="white" size={25} />,
    <Twitter fill="white" size={25} />,
    <Globe fill="white" size={25} />,
    <Linkedin fill="white" size={25} />,
  ];
  return (
    <div className="flex gap-4 items-center">
      {SocialArray.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export { Footer };

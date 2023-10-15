import Image from "next/image";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import illustrationImage from "../public/illustration-mockups.svg";
import LogoIcon from "../public/logo.svg";

const Home = () => {
  return (
    <div className="px-10 py-5 max-w-[1440px] relative mx-auto md:py-10">
      <div className="space-y-10 md:space-y-20">
        <div className="flex-1">
          <Image priority src={LogoIcon} alt="h-[40pt]" />
        </div>
        <div className="flex flex-1 flex-col max-md:gap-y-16 lg:flex-row md:gap-x-10">
          <div className="flex-1 ">
            <Image priority src={illustrationImage} alt="" />
          </div>
          <div className="flex-1 space-y-6 text-center md:pt-16 lg:text-left">
            <h1 className="font-popins text-2xl font-semibold md:text-5xl text-white lg:text-6xl">
              Build The Community Your Fans Will Love
            </h1>
            <p className="font-open_sans text-base text-white">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="register-btn">Register</button>
          </div>
        </div>
        <div className="flex flex-1 social-container flex-row justify-center gap-x-5">
          <div className="social-btn group">
            <FaFacebookF color="white" className="group-hover:fill-soft_magneta transition" />
          </div>
          <div className="social-btn group">
            <FaXTwitter color="white" className="group-hover:fill-soft_magneta transition" />
          </div>
          <div className="social-btn group:">
            <FaInstagram color="white" className="group-hover:fill-soft_magneta transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

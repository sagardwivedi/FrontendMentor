import Image from "next/image";

import { IconType } from "react-icons";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

interface IconProps {
  icon: IconType;
}

const Icon = ({ icon: Icon }: IconProps) => {
  return (
    <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white hover:border-soft_magneta">
      <Icon color="white" size={20} className="group-hover:fill-soft_magneta" />
    </div>
  );
};

const Home = () => {
  return (
    <div className="main-image max-w-[1440px]  mx-auto min-h-screen">
      <div className="flex flex-col max-md:py-8 md:p-16 w-[90%] mx-auto">
        <div className="logo relative"></div>
        <div className="flex flex-col md:flex-row max-md:gap-y-10 mt-16 md:mt-20 md:gap-x-10 md:items-start">
          <div className="md:w-[70%] md:h-[35rem] relative h-[15rem] w-full">
            <Image
              src={"/illustration-mockups.svg"}
              alt=""
              fill
              className="bg-contain"
              priority
            />
          </div>
          <div className="text-white md:w-[30%] max-md:text-center pt-5 md:pt-10 md:pl-5">
            <h1 className="text-2xl md:text-4xl font-popins font-semibold tracking-wide md:leading-[3rem]">
              Build The Community Your Fans Will Love
            </h1>
            <p className="font-open_sans mt-5 md:mt-7">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="mt-5 bg-white rounded-full text-violet shadow-2xl shadow-violet py-4 w-[50%] hover:bg-soft_magneta hover:text-white transition">
              Register
            </button>
          </div>
        </div>
        <section className="flex flex-row justify-center mt-8 gap-x-5 lg:justify-end">
          <Icon icon={BiLogoFacebook} />
          <Icon icon={FaXTwitter} />
          <Icon icon={FaInstagram} />
        </section>
      </div>
    </div>
  );
};

export default Home;

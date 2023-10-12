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
    <div className="max-lg:m-10 flex flex-col gap-y-10 lg:mx-14 lg:mt-7">
      <Image
        className="max-lg:hidden"
        src={"/logo.svg"}
        width={300}
        height={100}
        alt=""
        priority
      />
      <Image
        className="lg:hidden"
        src={"/logo.svg"}
        width={150}
        height={100}
        alt=""
        priority
      />
      <section className="flex flex-col max-lg:gap-y-12 lg:flex-row lg:gap-x-10">
        <div className="lg:w-[50%]">
          <Image
            src={"/illustration-mockups.svg"}
            alt=""
            width={100}
            height={100}
            className="h-auto w-full"
          />
        </div>
        <div className="h-min lg:w-[38%] space-y-4 text-white max-lg:text-center">
          <h1 className="font-popins text-2xl font-semibold leading-10 tracking-wide lg:text-4xl">
            Build The Community Your Fans Will Love
          </h1>
          <p className="font-open_sans">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="h-12 w-full rounded-full bg-white text-violet shadow-lg shadow-violet transition-colors hover:bg-soft_magneta hover:text-white lg:w-[30%]">
            Register
          </button>
        </div>
      </section>
      <section className="flex flex-row justify-center gap-x-5 lg:justify-end">
        <Icon icon={BiLogoFacebook} />
        <Icon icon={FaXTwitter} />
        <Icon icon={FaInstagram} />
      </section>
    </div>
  );
};

export default Home;

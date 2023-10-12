import Image from "next/image";

const Home = () => {
  return (
    <div className="p-10 space-y-14">
      <Image src={"/logo.svg"} width={120} height={100} alt="" priority />
      <section className="flex flex-col lg:flex-row max-lg:gap-y-14">
        <Image
          src={"/illustration-mockups.svg"}
          alt=""
          width={100}
          height={100}
          className="w-full h-auto"
        />
        <div className="max-lg:text-center text-white space-y-6">
          <h1 className="font-popins tracking-wide text-2xl font-semibold leading-10">
            Build The Community Your Fans Will Love
          </h1>
          <p className="font-open_sans">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="w-full bg-white text-violet rounded-full h-12 shadow-lg shadow-violet">
            Register
          </button>
        </div>
      </section>
      <section className="flex-row flex gap-x-5">
        <div></div>
      </section>
    </div>
  );
};

export default Home;

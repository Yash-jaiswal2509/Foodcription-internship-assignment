import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FlipWords } from "./ui/flip-words";
import { Input } from "./ui/input";

const Hero = () => {
  const words = ["Hiring", "Recruiting", "Employing", "Appointing"];
  return (
    <div className="flex flex-col w-full items-center bg-[url('/Banner.svg')] bg-cover bg-center bg-no-repeat">
      <div className="mt-10 flex items-center gap-5">
        <span className="w-40 h-[2px] bg-gradient-to-r from-white to-black/70 rounded-full"></span>
        <p className="border px-8 py-2 rounded-full drop-shadow-md font-bold uppercase">
          Digital Recruiting system
        </p>
        <span className="w-40 h-[2px] bg-gradient-to-r from-black/70 to-white rounded-full"></span>
      </div>
      <h1 className="text-5xl font-bold mt-8">
        Your Ultimate <FlipWords words={words} /> Solution
      </h1>
      <p className="text-center mt-5 text-gray-700/90">
        Efficient and intuitive solutions designed to meet the needs of global
        enterprises.
        <br /> Empowering HR professionals with a seamless recruitment
        experience.
      </p>
      <div className="mt-10 flex items-center gap-3 w-[40%] mb-[500px]">
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit" className="flex items-center gap-2">
          Schedule a demo <ArrowRightIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;

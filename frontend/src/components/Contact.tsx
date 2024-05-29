import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div id="contact" className="mt-20 flex flex-col items-center">
      <div className="flex items-center gap-5">
        <span className="w-40 h-[2px] bg-gradient-to-r from-white to-black/70 rounded-full"></span>
        <p className="border px-8 py-2 rounded-full drop-shadow-md font-bold uppercase">
          Contact
        </p>
        <span className="w-40 h-[2px] bg-gradient-to-r from-black/70 to-white rounded-full"></span>
      </div>

      <div className="bg-[url('/wavy-black-white-background.jpg')] p-32 w-full flex flex-col mt-10">
        <h1 className="text-white text-center text-5xl font-bold">
          Ready To Change Your
          <br  /> Hiring Experience?
        </h1>
        <Button className="text-black bg-white hover:bg-gray-100 mx-auto mt-20 flex items-center gap-2">
          Schedule a Demo <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Contact;

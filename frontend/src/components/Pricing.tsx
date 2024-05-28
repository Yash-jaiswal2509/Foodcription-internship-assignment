import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  return (
    <div id="pricing" className="mt-20 flex flex-col items-center">
      <div className="flex items-center gap-5">
        <span className="w-40 h-[2px] bg-gradient-to-r from-white to-black/70 rounded-full"></span>
        <p className="border px-8 py-2 rounded-full drop-shadow-md font-bold uppercase">
          Pricing
        </p>
        <span className="w-40 h-[2px] bg-gradient-to-r from-black/70 to-white rounded-full"></span>
      </div>
      <h1 className="text-center text-5xl font-bold mt-10">
        See our Affordable Plans & Pricing
      </h1>
      <p className="text-center mt-5 text-gray-700/90">
        Select the perfect plan to enhance your recruitment process.
        <br /> Each option is designed to fit different budgets and
        requirements.
      </p>
      <div className=" px-20 mt-16 grid grid-cols-3 w-full gap-5">
        <div className="p-8 flex flex-col items-center border rounded-lg drop-shadow-lg">
          <h1 className="text-xl font-semibold">Standard Plan</h1>
          <div className="w-full pb-4 flex items-baseline justify-center gap-2 border-b-black border-b-[1px]">
            <p className="text-3xl mt-2 font-bold">
              <span>&#8377;</span>1000
            </p>
            <p>/ per month</p>
          </div>
          <ul className="mt-6 w-full px-1">
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Limited Job Postings
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Basic Candidate Search
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Email Support
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Profile Views
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Save Searches
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Applicant Tracking
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Customizable Job Templates
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Job Posting Analytics
            </li>
          </ul>
          <Button className="mt-4 w-full">Get Started</Button>
        </div>

        <div className="p-8 flex flex-col items-center border rounded-lg drop-shadow-lg">
          <h1 className="text-xl font-semibold">Premium Plan</h1>
          <div className="w-full pb-4 flex items-baseline justify-center gap-2 border-b-black border-b-[1px]">
            <p className="text-3xl mt-2 font-bold">
              <span>&#8377;</span>2000
            </p>
            <p>/ per month</p>
          </div>
          <ul className="mt-6 w-full px-1">
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Unlimited Job Postings
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Advanced Candidate Search
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Email and Chat Support
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Profile Views
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Save Searches
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Applicant Tracking
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Job Posting Analytics
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Interview Scheduling
            </li>
          </ul>
          <Button className="mt-4 w-full">Get Started</Button>
        </div>

        <div className="p-8 flex flex-col items-center border rounded-lg drop-shadow-lg bg-black text-white">
          <h1 className="text-xl font-semibold">Enterprise Plan</h1>
          <div className=" w-full pb-4 flex items-baseline justify-center gap-2 border-b-white border-b-[1px]">
            <p className="text-3xl mt-2 font-bold">
              <span>&#8377;</span>3000
            </p>
            <p>/ per month</p>
          </div>
          <ul className="mt-6 w-full px-1">
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Limited Job Postings
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Basic Candidate Search
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Email Support
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Profile Views
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Save Searches
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Applicant Tracking
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Customizable Job Templates
            </li>
            <li className="flex items-center justify-start gap-3 mt-2">
              <CheckCircle size={18} /> Job Posting Analytics
            </li>
          </ul>
          <Button className="mt-4 w-full bg-white text-black">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

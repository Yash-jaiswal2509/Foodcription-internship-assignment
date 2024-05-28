import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100/50">
      <div className="flex flex-col p-6">
        <div className="flex items-center justify-between cursor-pointer">
          <Link to="/" className="flex items-center">
            <img
              src="Logo.png"
              className=" w-12 h-12 sm:h-20 sm:w-20 rounded-full"
            />
            <h1 className=" text-3xl font-bold text-gray-800/85 hover:text-gray-800 font-serif font">
              SmartHire
            </h1>
          </Link>
          <div className="flex gap-6 mr-4">
            {/* for privacy enhacement rel="noreferrer" */}
            <a
              className="hover:scale-110"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              className="hover:scale-110"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={24} />
            </a>
            <a
              className="hover:scale-110"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              className="hover:scale-110"
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
        <span className="h-[2px] my-4 bg-zinc-200"></span>

        <div className="grid grid-cols-footerList px-8 py-4">
          <ul className="flex flex-col gap-4">
            <li className="mb-3 font-semibold text-lg">About Us</li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              About Us
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Our Team
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Mission and Values
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Testimonials
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="mb-3 font-semibold text-lg">Products</li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Features
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Pricing
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="mb-3 font-semibold text-lg">Support</li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              FAQ
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Support
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Contact Us
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="mb-3 font-semibold text-lg">Community</li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Forums
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Events
            </li>
            <li className="text-gray-500 hover:underline hover:underline-offset-4 text-sm cursor-pointer">
              Newsletter
            </li>
          </ul>
          <div className="ml-16 flex flex-col">
            <h1 className="text-3xl font-bold">Newsletter</h1>
            <p className="text-sm text-gray-500 mt-2">
              Subscribe newsletter for the latest hiring tips and
              exclusive recruitment insights!
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">By subscribing you agree to our privacy policy and provide your consent to recieve updates from our company</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-between items-center py-8 px-6">
        <p className=" text-gray-500/90 text-sm">
          Copyright 2024 <span>&copy;</span> SmartHire. All Rights Reserved
        </p>
        <div className="flex gap-8 text-gray-500/95">
          <p className="text-sm underline underline-offset-4 hover:text-gray-800 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-sm underline underline-offset-4 hover:text-gray-800 cursor-pointer">
            Terms Of Service
          </p>
          <p className="text-sm underline underline-offset-4 hover:text-gray-800 cursor-pointer">
            Cookie Settings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

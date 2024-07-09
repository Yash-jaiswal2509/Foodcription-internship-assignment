import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import ComapniesTrusted from "../components/ComapniesTrusted";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { useAuth } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin", { replace: true });
    }
  }, [token,navigate]);

  return (
    <div className="flex flex-col flex-1 mx-auto 2xl:max-w-screen-2xl">
      <Hero />
      <ComapniesTrusted />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;

import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import ComapniesTrusted from "../components/ComapniesTrusted";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const HomePage = () => {
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

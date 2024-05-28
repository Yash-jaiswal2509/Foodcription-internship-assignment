import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import ComapniesTrusted from "../components/ComapniesTrusted";

const HomePage = () => {
  return (
    <div className="flex flex-col flex-1 mx-auto 2xl:max-w-screen-2xl">
      <Hero />
      <ComapniesTrusted />
      <Features />
      <About />
    </div>
  );
};

export default HomePage;

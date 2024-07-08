import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const { setToken, token, user, setUser } = useAuth();
  const [menu, setMenu] = useState("home");

  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="p-1 flex items-center justify-between border-b-[1px] bg-background sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" sm:px-2 flex items-center cursor-pointer">
        <Link to="/">
          <img
            src="Logo.png"
            className=" w-12 h-12 sm:h-12 sm:w-12 rounded-full"
          />
        </Link>
        <Link to="/">
          <h1 className=" text-2xl font-bold text-gray-800/85 hover:text-gray-800 font-serif font">
            SmartHire
          </h1>
        </Link>
      </div>
      <ul className="flex gap-5">
        {token ? (
          <></>
        ) : (
          <>
            <a
              href="#home"
              onClick={() => setMenu("home")}
              className={
                menu === "home"
                  ? "underline underline-offset-4 font-medium text-gray-800"
                  : "font-medium text-gray-800/70"
              }
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setMenu("features")}
              className={
                menu === "features"
                  ? "underline underline-offset-4 font-medium text-gray-800"
                  : "font-medium text-gray-800/70"
              }
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={() => setMenu("pricing")}
              className={
                menu === "pricing"
                  ? "underline underline-offset-4 font-medium text-gray-800"
                  : "font-medium text-gray-800/70"
              }
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              onClick={() => setMenu("testimonials")}
              className={
                menu === "testimonials"
                  ? "underline underline-offset-4 font-medium text-gray-800"
                  : "font-medium text-gray-800/70"
              }
            >
              Testimonials
            </a>

            <a
              href="#contact"
              onClick={() => setMenu("contact")}
              className={
                menu === "contact"
                  ? "underline underline-offset-4 font-medium text-gray-800"
                  : "font-medium text-gray-800/70"
              }
            >
              Contact
            </a>
          </>
        )}
      </ul>
      <div className="flex hover:opacity-95 items-center">
        <div>{/* <MenuButton /> */}</div>
        {token ? (
          <div className="flex items-center">
            <Button
              variant={"default"}
              className={cn("mx-4 text-base font-bold hidden sm:flex h-9")}
              onClick={logout}
            >
              Logout <LogOut className="ml-1" size={16} />
            </Button>
            <img
              src={user?.coverImage}
              alt=""
              className="h-10 bg-gray-100 rounded-full"
            />
          </div>
        ) : (
          <Link to="/login">
            <Button
              variant={"default"}
              className={cn("mx-4 text-base font-bold hidden sm:flex h-9")}
            >
              Login <LogIn className="ml-1" size={16} />
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

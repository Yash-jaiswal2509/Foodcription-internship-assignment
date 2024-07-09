import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAuth } from "@/providers/AuthProvider";
import * as ApiClient from "@/api-client";

export type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const { setToken, setUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();

  const mutation = useMutation({
    mutationFn: ApiClient.login,
  });

  const onSubmit = handleSubmit((data: LoginFormData) => {
    mutation.mutate(data);
  });

  useEffect(() => {
    if (mutation.data?.data.success) {
      setToken(mutation.data?.data.data.accessToken);
      localStorage.setItem("token", mutation.data?.data.data.accessToken);
      setUser(mutation.data?.data.data.user);
      console.log(mutation.data?.data.data.user);
      localStorage.setItem(
        "user",
        JSON.stringify(mutation.data?.data.data.user)
      );
      navigate("/admin", { replace: true });
      toast.message("Successfully Logged In", { closeButton: true });
    }
  }, [mutation.isSuccess]);

  return (
    <div className="flex w-screen h-full justify-center items-center mx-auto 2xl:max-w-screen-xl relative">
      <img
        src="assets/Banner.png"
        className="w-full h-screen 2xl:h-full"
        alt="Banner"
      />
      <div className="absolute z-10 size-full bg-black/50 backdrop-blur-sm"></div>
      <form
        className="flex flex-col my-auto w-[50%] p-10 rounded-lg absolute z-20 bg-white"
        onSubmit={onSubmit}
      >
        <div className="flex justify-center items-end gap-5">
          <h1 className="text-3xl font-bold">Login</h1>
          <Link to="/">
            <LogOutIcon size={30} className="mb-1" />
          </Link>
        </div>
        <div className="flex-col w-full flex gap-2 lg:gap-5 ">
          <label className="flex flex-col gap-1">
            <span className=" text-lg font-bold">
              Email<span className=" text-red-600">*</span>
            </span>
            <input
              type="email"
              placeholder="example123@gmail.com"
              className=" outline-0 border-2 rounded-md p-2 dark:bg-black"
              {...register("email", {
                required: "Email field is empty",
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-base">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className=" text-lg font-bold">
              Password<span className=" text-red-600">*</span>
            </span>
            <input
              type="password"
              placeholder="Enter your Password here"
              className=" outline-0 border-2 rounded-md p-2 dark:bg-black"
              {...register("password", {
                required: "Password field is empty",
              })}
            />
            <span className=" w-full text-right underline text-cyan-700 hover:text-cyan-800 pr-2 cursor-pointer">
              Forgot password?
            </span>
            {errors.password && (
              <span className="text-red-600 text-base">
                {errors.password.message}
              </span>
            )}
          </label>

          <Button
            type="submit"
            className="text-xl"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loggin In..." : "Log in"}
          </Button>
          <span className="text-center">
            Don't have an account?
            <Link to="/register">
              <span className="ml-2 text-cyan-700 hover:text-cyan-800 underline cursor-pointer">
                Create Account
              </span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

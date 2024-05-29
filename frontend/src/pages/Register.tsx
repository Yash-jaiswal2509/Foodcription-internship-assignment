import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as ApiClient from "@/api-client";
import { toast } from "sonner";
import { useEffect } from "react";

export type RegisterFormData = {
  fullName: string;
  companyName: string;
  email: string;
  password: string;
  phone: string;
  role: string[];
};

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>();

  const mutation = useMutation({
    mutationFn: ApiClient.register,
  });

  const onSubmit = handleSubmit((data: RegisterFormData) => {
    mutation.mutate(data);
  });

  useEffect(() => {
    if (mutation.data?.data.success) {
      navigate(from, { replace: true });
      toast.message("Successfully Registered", { closeButton: true });
    }
  }, [mutation.isSuccess]);

  return (
    <div className="p-6 flex mx-auto 2xl:max-w-screen-xl">
      <img src="src/assets/Banner.png" className="w-[50%]" alt="Banner" />
      <form
        className="flex flex-col p-10 w-full rounded-lg"
        onSubmit={onSubmit}
      >
        <div className="flex justify-center items-end gap-5">
          <h1 className="text-3xl font-bold">Register</h1>
          <Link to="/">
            <LogOutIcon size={30} className="mb-1" />
          </Link>
        </div>
        <div className="flex-col w-full flex gap-2 lg:gap-5 ">
          <label className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="font-bold text-sm sm:text-base">
                Full Name
                <span className="text-red-600">*</span>
              </span>
              {errors.fullName && (
                <span className="ml-5 text-red-600 text-xs sm:text-sm">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter your Full Name here"
              className=" outline-0 border-2 text-xs sm:text-base rounded-md px-2 py-1.5"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
          </label>

          <label className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="text-sm sm:text-base font-bold">
                Company Name
                <span className=" text-red-600">*</span>
              </span>
              {errors.companyName && (
                <span className="ml-5 text-red-600 text-xs">
                  {errors.companyName.message}
                </span>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter your Company Name"
              className=" outline-0 border-2 rounded-md px-2 py-1.5 text-xs lg:text-base"
              {...register("companyName", {
                required: "This field is required",
              })}
            />
          </label>

          <label className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="text-sm sm:text-base font-bold">
                Email
                <span className=" text-red-600">*</span>
              </span>
              {errors.email && (
                <span className="ml-5 text-red-600 text-xs sm:text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <input
              type="email"
              placeholder="123example@gmail.com"
              className="text-xs sm:text-base outline-0 border-2 rounded-md px-2 py-1.5"
              {...register("email", {
                required: "This field is required",
              })}
            />
          </label>

          <label className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="text-sm sm:text-base font-bold">
                Password<span className=" text-red-600">*</span>
              </span>
              {errors.password && (
                <span className=" text-red-600 text-xs sm:text-sm ml-5">
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              type="password"
              placeholder="Password must be more than 8 characters"
              className=" outline-0 border-2 rounded-md px-2 py-1.5 text-xs lg:text-base"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be more than 8 characters",
                },
              })}
            />
          </label>

          <label className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="text-sm sm:text-base font-bold">
                Phone Number
                <span className=" text-red-600">*</span>
              </span>
              {errors.phone && (
                <span className="ml-5 text-red-600 text-xs sm:text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="text-xs sm:text-base outline-0 border-2 rounded-md px-2 py-1.5"
              {...register("phone", {
                required: "This field is required",
              })}
            />
          </label>

          <div className="flex flex-col gap-1">
            <div className="flex-row">
              <span className="text-sm sm:text-base font-bold">
                Role<span className="text-red-600">*</span>
              </span>
              {errors.role && (
                <span className="ml-5 text-red-600 text-xs sm:text-sm">
                  {errors.role.message}
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="candidate"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                />
                <span className="ml-2">Candidate</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="company"
                  {...register("role", {
                    required: "Please select a role",
                  })}
                />
                <span className="ml-2">Company</span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className=" text-lg md:text-xl/50 dark:hover:bg-black dark:text-white  "
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Registering..." : "Register"}
          </Button>

          <span className="text-center">
            Already have an account?
            <Link to="/login">
              <span className="ml-2 text-cyan-700 hover:text-cyan-800 underline cursor-pointer">
                Login
              </span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;

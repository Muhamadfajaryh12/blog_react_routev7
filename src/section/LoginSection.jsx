import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import TextInput from "../components/form/TextInput";
import { Login } from "../shared/AuthenticationAPI";

const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Password required"),
});
const LoginSection = ({ setMode }) => {
  const { loginToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const Submit = async (data) => {
    const response = await Login({
      email: data.email,
      password: data.password,
    });
    if (response.status == 200) {
      loginToken(response.token);
      navigate("/dashboard");
    }
  };

  return (
    <form
      className="w-96 h-96 flex flex-col gap-4"
      onSubmit={handleSubmit(Submit)}
    >
      <h1 className="font-extrabold text-center my-1 uppercase text-3xl">
        Login
      </h1>
      <TextInput
        name={"email"}
        label={"Email"}
        type={"email"}
        register={register}
        errors={errors}
      />
      <TextInput
        name={"password"}
        label={"Password"}
        type={"password"}
        register={register}
        errors={errors}
      />
      <button
        className="bg-gray-600 text-white  w-full p-2 rounded-md"
        type="submit"
      >
        Sign In
      </button>
      <button
        className="bg-blue-600 text-white  w-full p-2 rounded-md"
        onClick={(e) => {
          setMode("register"), e.stopPropagation();
        }}
        type="button"
      >
        Register
      </button>
    </form>
  );
};

export default LoginSection;

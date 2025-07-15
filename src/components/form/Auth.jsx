import React, { useState } from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { Login, Register } from "../../shared/AuthenticationAPI";
import { useAuth } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const zodSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Password required"),
});
const Auth = () => {
  const [mode, setMode] = useState("login");
  const { loginToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(zodSchema),
  });

  const Submit = async (data) => {
    console.log(errors);
    if (mode == "login") {
      const response = await Login({
        email: data.email,
        password: data.password,
      });
      if (response.status == 200) {
        loginToken(response.token);
        navigate("/dashboard");
      }
    } else {
      const response = await Register({
        email: data.email,
        password: data.password,
        role: data.role,
      });
      if (response.status == 201) {
        console.log(response);
      }
    }
  };

  return (
    <form
      className="w-96 h-96 flex flex-col gap-4"
      onSubmit={handleSubmit(Submit)}
    >
      <h1 className="font-extrabold text-center my-1 uppercase text-3xl">
        {mode}
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
        {mode == "register" ? "Sign up" : "Sign in"}
      </button>
      {mode == "register" ? (
        <button
          className="bg-blue-600 text-white  w-full p-2 rounded-md"
          onClick={(e) => {
            setMode("login"), e.stopPropagation();
          }}
          type="button"
        >
          Login
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white  w-full p-2 rounded-md"
          onClick={(e) => {
            setMode("register"), e.stopPropagation();
          }}
          type="button"
        >
          Register
        </button>
      )}
    </form>
  );
};

export default Auth;

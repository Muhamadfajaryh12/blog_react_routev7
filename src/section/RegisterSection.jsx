import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import TextInput from "../components/form/TextInput";
import { Register } from "../shared/AuthenticationAPI";
import ToastCustom from "../components/form/ToastCustom";
import Select from "../components/form/Select";

const registerSchema = z.object({
  email: z.string().email("Email required"),
  password: z.string().min(1, "Password required"),
  name: z.string().min(1, "Name required"),
  role: z.string().min(1, "Role required"),
});

const RegisterSection = ({ setMode }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const Submit = async (data) => {
    const response = await Register({
      email: data.email,
      password: data.password,
      role: data.role,
      name: data.name,
    });
    console.log(data)
    if (response.status == 201) {
      ToastCustom({ type: "success", message: response.message });
    }
  };

  const dataRole = [
    {
      id: "Author",
      tag: "Author",
    },
    {
      id: "Reader",
      tag: "Reader",
    },
  ];
  return (
    <form className="w-96  flex flex-col gap-4" onSubmit={handleSubmit(Submit)}>
      <h1 className="font-extrabold text-center my-1 uppercase text-3xl">
        Register
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
      <TextInput
        name={"name"}
        label={"Name"}
        type={"text"}
        register={register}
        errors={errors}
      />
      <Select
        label={"Role"}
        name={"role"}
        placeholder={"Select role"}
        dataSelect={dataRole}
        register={register}
      />
      <button
        className="bg-gray-600 text-white  w-full p-2 rounded-md"
        type="submit"
      >
        Sign Up
      </button>
      <button
        className="bg-blue-600 text-white  w-full p-2 rounded-md"
        onClick={(e) => {
          setMode("login"), e.stopPropagation();
        }}
        type="button"
      >
        Login
      </button>
    </form>
  );
};

export default RegisterSection;

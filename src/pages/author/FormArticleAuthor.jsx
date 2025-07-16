import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useForm } from "react-hook-form";
import TextInput from "../../components/form/TextInput";
import Select from "../../components/form/Select";
import TextArea from "../../components/form/TextArea";

const dataSelect = [
  {
    id: "1",
    value: "z",
  },
];
const FormArticleAuthor = () => {
  const [tag, setTag] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleTag = (value) => {
    if (value) {
      setTag((prev) => [...prev, value]);
    }
  };

  const handleRemoveTag = (id) => {
    setTag((prev) => prev.filter((item) => item != id));
  };
  return (
    <div>
      <Breadcrumbs title={["Author", "Article", "Form"]} />
      <section className="mt-5">
        <h1 className="text-3xl font-extrabold my-4">Form Article</h1>
        <form className="w-full flex flex-col gap-4">
          <TextInput
            name={"Title"}
            register={register}
            type={"text"}
            label={"Title"}
            errors={errors}
          />
          <Select
            name={"tag"}
            label={"Tag"}
            dataSelect={dataSelect}
            placeholder={"Select tag"}
            handleChange={handleTag}
          />
          {tag && (
            <div className="flex gap-4">
              {tag.map((item) => (
                <span className="p-2 flex gap-2 items-center bg-gray-900 text-white text-sm font-semibold rounded-md">
                  <p>{item}</p>
                  <button onClick={() => handleRemoveTag(item)}>x</button>
                </span>
              ))}
            </div>
          )}
          <TextArea
            label={"Content"}
            name={"content"}
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 p-2 rounded-md text-white uppercase text-widest font-semibold"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default FormArticleAuthor;

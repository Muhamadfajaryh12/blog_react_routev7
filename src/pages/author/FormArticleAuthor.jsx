import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useForm } from "react-hook-form";
import TextInput from "../../components/form/TextInput";
import Select from "../../components/form/Select";
import TextArea from "../../components/form/TextArea";
import FileInput from "../../components/form/FileInput";
import ToastCustom from "../../components/form/ToastCustom";
import { useAuth } from "../../context/AuthContext";
import { PostBlog, UpdateBlog } from "../../shared/BlogAPI";
import { useFetch } from "../../hooks/useFetch";

const FormArticleAuthor = ({ dataArticle }) => {
  const [tag, setTag] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { user } = useAuth();

  const { data: dataTag } = useFetch(`${import.meta.env.VITE_API_URL}/tags`);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: dataArticle?.title || "",
      content: dataArticle?.content || "",
    },
  });

  useEffect(() => {
    if (dataArticle) {
      reset({ title: dataArticle.title, content: dataArticle.content });
      setPreview(`${import.meta.env.VITE_IMAGE_URL}/${dataArticle.image}`);
      setTag(dataArticle?.tags?.map((item) => item.id));
    }
  }, [dataArticle, reset]);

  const handleTag = (value) => {
    if (value) {
      setTag((prev) => [...prev, value]);
    }
  };

  const handleRemoveTag = (id) => {
    setTag((prev) => prev.filter((item) => item != id));
  };

  const handleChangeImage = (value) => {
    setImage(value);
    setPreview(URL.createObjectURL(value));
  };

  const Submit = async (dataValue) => {
    const formData = new FormData();
    formData.append("title", dataValue.title);
    formData.append("content", dataValue.content);
    formData.append("upload", image);
    formData.append("user_id", user.user_id);
    formData.append("tags_id", tag);

    let response;
    response = dataArticle
      ? await UpdateBlog({ id: dataArticle.id, formData: formData })
      : await PostBlog({ formData: formData });
    if ([200, 201].includes(response.status)) {
      ToastCustom({ type: "success", message: response.message });
    } else {
      ToastCustom({ type: "error", message: "Invalid created" });
    }

    if (response.status == 201) {
      reset();
      setImage(null);
      setTag([]);
      setPreview(null);
    }
  };

  return (
    <div>
      <Breadcrumbs title={["Author", "Article", "Form"]} />
      <section className="mt-5">
        <h1 className="text-3xl font-extrabold my-4">Form Article</h1>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(Submit)}
        >
          <TextInput
            name={"title"}
            register={register}
            type={"text"}
            label={"Title"}
            errors={errors}
          />
          <Select
            name={"tag"}
            label={"Tag"}
            dataSelect={dataTag}
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
          <FileInput
            label={"Banner"}
            onChangeImage={handleChangeImage}
            preview={preview}
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

import React from "react";
import TextArea from "../components/form/TextArea";
import { useForm } from "react-hook-form";
import { PostComment } from "../shared/CommentAPI";
import { useParams } from "react-router";
import ToastCustom from "../components/form/ToastCustom";
import { FaUser } from "react-icons/fa";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const commentSchema = z.object({
  content: z.string().min(1, "required content"),
});
const CommentSection = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const Submit = async (value) => {
    const response = await PostComment({
      blog_id: Number(id),
      content: value.content,
    });
    if (response.status == 201) {
      ToastCustom({ type: "success", message: response.message });
      reset();
    } else {
      ToastCustom({
        type: "error",
        message: "Anda harus login terlebih dahulu",
      });
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit(Submit)}>
        <TextArea
          register={register}
          name={"content"}
          placeholder={"writing"}
          errors={errors}
        />
        <button className="p-2 rounded-md bg-black text-sm my-2  text-white">
          Submit
        </button>
      </form>
      {data?.length > 0 ? (
        data?.map((item) => (
          <div className="my-2">
            <div className="flex gap-2 items-center">
              <div className="bg-gray-500 w-6 h-6 rounded-full flex justify-center items-center ">
                <FaUser className="text-white" size={10} />
              </div>
              <p className="font-semibold capitalize">{item.sender}</p>
            </div>
            <p>{item.content}</p>
          </div>
        ))
      ) : (
        <p className="text-center p-6 w-full border rounded-md border-gray-300">
          Belum ada komentar
        </p>
      )}
    </div>
  );
};

export default CommentSection;

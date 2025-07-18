import React from "react";
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";

const DetailArticle = () => {
  const params = useParams();
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/blogs/${params.id}`
  );
  console.log(data);
  if (loading) return <Loading />;
  return (
    <div className="flex flex-col gap-5">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}/${data.image}`}
        alt={data.title}
        className="w-6xl h-96 object-cover"
      />
      <div className="">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <h6 className="text-xl font-bold">{data.date}</h6>
        <p className="">Author {data.author}</p>
      </div>
      <section id="content">
        <p>{data.content}</p>
      </section>
      <section>
        <h1 className="font-bold text-xl">Comments</h1>
      </section>
    </div>
  );
};

export default DetailArticle;

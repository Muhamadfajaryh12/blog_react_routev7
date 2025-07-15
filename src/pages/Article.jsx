import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useFetch(`${import.meta.env.VITE_API_URL}/blogs`);
  const { data: tagsData } = useFetch(`${import.meta.env.VITE_API_URL}/tags`);
  if (loading) return <Loading />;

  const itemsPage = 6;
  const countData = Math.ceil(data?.all?.length / itemsPage);
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  const paginationData = data?.all?.slice(startIndex, endIndex);

  const handlePagination = (params) => {
    if (params == "prev") {
      setCurrentPage((prev) => prev++);
    } else {
      setCurrentPage((prev) => prev--);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="border border-gray-400 rounded-full px-4 p-2 flex items-center max-w-2xl w-full">
        <input type="text" className="focus:outline-0 w-full" />
        <FaSearch />
      </div>
      <div className="flex gap-4">
        {tagsData?.map((item) => (
          <span key={item.id}>{item.tag}</span>
        ))}
      </div>
      <section className="my-4">
        <h1 className="font-bold text-2xl my-2">Trending Article</h1>
        <div className="grid grid-cols-3 gap-4">
          {data?.trending?.map((item) => (
            <Card key={item.title} dataCard={item} />
          ))}
        </div>
      </section>
      <section className="my-4">
        <h1 className="font-bold text-2xl my-2">Latest Article</h1>
        <div className="grid grid-cols-3 gap-4">
          {data?.latest?.map((item) => (
            <Card key={item.title} dataCard={item} />
          ))}
        </div>
      </section>
      <section className="my-4">
        <h1 className="font-bold text-2xl my-2">Article</h1>
        <div className="grid grid-cols-3 gap-4">
          {paginationData?.map((item) => (
            <Card key={item.title} dataCard={item} />
          ))}
        </div>
        <div className="flex items-center gap-4 justify-center">
          <button onClick={() => handlePagination("prev")}>Prev</button>
          <button onClick={() => handlePagination("next")}> Next</button>
        </div>
      </section>
    </div>
  );
};

export default Article;

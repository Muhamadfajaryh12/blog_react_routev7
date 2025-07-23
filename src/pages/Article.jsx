import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router";

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputKeyword, setInputKeyword] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch(`${import.meta.env.VITE_API_URL}/blogs`);
  const { data: tagsData } = useFetch(`${import.meta.env.VITE_API_URL}/tags`);
  if (loading) return <Loading />;

  const itemsPage = 6;
  const countData = Math.ceil(data?.all?.length / itemsPage);
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  let paginationData = data?.all?.slice(startIndex, endIndex);
  console.log(data);
  const handlePagination = (params) => {
    if (params == "prev") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?search=${inputKeyword}`);
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <form
        onSubmit={handleSearch}
        className="border my-6 border-gray-400 rounded-full px-4 p-2 flex items-center mx-auto max-w-2xl w-lg"
      >
        <input
          type="text"
          className="focus:outline-0 w-full"
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
        />
        <FaSearch />
      </form>
      <div className="flex gap-4">
        {tagsData?.map((item) => (
          <Link key={item.id} to={`/tag?tag=${item.id}`}>
            {item.tag}
          </Link>
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
            <Card key={item.id} dataCard={item} />
          ))}
        </div>
        <div className="flex items-center gap-4 justify-center">
          <button
            onClick={() => handlePagination("prev")}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <button
            onClick={() => handlePagination("next")}
            disabled={countData <= currentPage}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Article;

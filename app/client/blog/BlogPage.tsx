import React from "react";
import { BiSearch } from "react-icons/bi";
import Card from "~/components/Card";

const BlogPage = () => {
  const data = ["Health", "Sport", "Technology", "Social", "Education"];
  return (
    <main className="flex  flex-col items-center justify-center pt-16 pb-4">
      <form className="border w-lg border-gray-300 p-1 px-2 rounded-full flex items-center">
        <input
          type="text"
          className="w-full focus:outline-0 p-1 placeholder:text-sm"
          placeholder="search..."
        />
        <BiSearch size={20} />
      </form>
      <div className="flex items-center justify-evenly">
        {data.map((item) => (
          <span className="p-2">{item}</span>
        ))}
      </div>
      <section className="my-4" id="new_article">
        <h1 className="font-bold text-xl my-2">New Article</h1>
        <div className="flex gap-4 ">
          <Card /> <Card /> <Card />
        </div>
      </section>
      <section className="my-4" id="new_article">
        <h1 className="font-bold text-xl my-2">
          <span className="text-red-600">Trending</span> Article
        </h1>
        <div className="flex gap-4 ">
          <Card /> <Card /> <Card />
        </div>
      </section>
      <section className="my-4" id="new_article">
        <h1 className="font-bold text-xl my-2">Article</h1>
        <div className="grid grid-cols-3 gap-4 ">
          <Card /> <Card /> <Card />
          <Card /> <Card /> <Card />
          <Card /> <Card /> <Card />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

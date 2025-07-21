import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";

const ArticleSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [inputKeyword, setInputKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/blogs/search?search=${searchQuery}`
  );

  useEffect(() => {
    setInputKeyword(searchQuery);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: inputKeyword });
    setCurrentPage(1);
  };

  if (loading) return <Loading />;

  const itemsPage = 6;
  let countTotalLength = Math.ceil(data?.length / itemsPage);
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  let dataSlice = data?.slice(startIndex, endIndex);

  const handlePagination = (value) => {
    if (value == "prev") {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
      console.log(currentPage);
    }
  };

  return (
    <div>
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
      {data?.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-3 gap-6">
            {dataSlice?.map((item) => (
              <Card dataCard={item} />
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button
              type="button"
              className="p-2 w-24 "
              onClick={() => handlePagination("prev")}
              disabled={currentPage <= 1}
            >
              Prev
            </button>
            <button
              type="button"
              className="p-2 w-24 "
              onClick={() => handlePagination("next")}
              disabled={countTotalLength <= currentPage}
            >
              Next
            </button>
          </div>
        </React.Fragment>
      ) : (
        <p className="p-4 my-10 text-center">Article tidak ditemukan</p>
      )}
    </div>
  );
};

export default ArticleSearch;

import React, { Fragment, useState } from "react";
import { useSearchParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Card from "../components/Card";

const ArticleTag = () => {
  const [tag] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/tags/${tag.get("tag")}`
  );

  if (loading) return <Loading />;
  console.log(data);
  const itemsPage = 6;
  const lengthPage = Math.ceil(data?.blogs?.length / itemsPage);
  const startIndex = (currentPage - 1) * itemsPage;
  const endIndex = startIndex + itemsPage;
  const dataSlice = data?.blogs?.slice(startIndex, endIndex);

  const handlePagination = (value) => {
    if (value == "prev") {
      setCurrentPage((prev) => prev++);
    } else {
      setCurrentPage((prev) => prev--);
    }
  };
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">Tag : {data?.tag}</h1>
      {data?.blogs?.length > 0 ? (
        <React.Fragment>
          <div className="grid grid-cols-3 gap-4">
            {dataSlice?.map((item) => (
              <Card dataCard={item} />
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
              disabled={currentPage >= lengthPage}
            >
              Next
            </button>
          </div>{" "}
        </React.Fragment>
      ) : (
        <p className="p-4 my-10 text-center">Article tidak ditemukan</p>
      )}
    </div>
  );
};

export default ArticleTag;

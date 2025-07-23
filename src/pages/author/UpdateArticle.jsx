import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router";
import FormArticleAuthor from "./FormArticleAuthor";
import Loading from "../../components/Loading";

const UpdateArticle = () => {
  const { id } = useParams();

  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/blogs/${id}`
  );
  if (loading) return <Loading />;
  return (
    <div>
      <FormArticleAuthor dataArticle={data} />
    </div>
  );
};

export default UpdateArticle;

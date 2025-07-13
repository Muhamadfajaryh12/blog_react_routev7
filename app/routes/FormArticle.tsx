import React from "react";
import FormArticles from "~/author/articles/FormArticles";
import BreadCrumb from "~/components/BreadCrumb";

const FormArticle = () => {
  return (
    <>
      <BreadCrumb dataCrumb={["Author", "Article", "Form"]} />
      <FormArticles />
    </>
  );
};

export default FormArticle;

import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import DataTableCustom from "../../components/DataTableCustom";
import { FaEye, FaInfo, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import DeleteSection from "../../section/DeleteSection";
import { DeleteBlog } from "../../shared/BlogAPI";
import ToastCustom from "../../components/form/ToastCustom";

const ArticleAuthor = () => {
  const { data, setData } = useFetch(
    `${import.meta.env.VITE_API_URL}/blogs/author`
  );
  const { showModal, closeModal } = useModal();

  const handleDelete = async (id) => {
    const response = await DeleteBlog({ id });
    if (response.status == 200) {
      ToastCustom({ type: "success", message: response.message });
      setData((prev) => prev.filter((item) => item.id != response.data.id));

      closeModal();
    }
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      header: "Title",
    },
    {
      name: "Tags",
      header: "Tags",
      cell: (row) => (
        <div className="flex gap-1">
          {row?.tags?.map((item) => (
            <span className="p-1 bg-gray-200 rounded-md text-sm">
              {item.tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      name: "Views",
      header: "Views",
      sortable: true,
      cell: (row) => (
        <div className="flex text-md items-center p-1 bg-gray-200 gap-2 rounded-md">
          <span>{row.view}</span>
          <FaEye />
        </div>
      ),
    },
    {
      name: "Date",
      header: "Date",
      sortable: true,
      cell: (row) => <span>{new Date(row.date).toLocaleDateString()}</span>,
    },
    {
      header: "",
      cell: (row) => (
        <div className="flex gap-2 items-center">
          <Link to={`/${row.id}`}>
            <button className="bg-blue-400 p-2 rounded-md">
              <FaInfo />
            </button>
          </Link>
          <Link to={`/articles/form/${row.id}`}>
            <button className="bg-yellow-400 p-2 rounded-md">
              <FaPencilAlt />
            </button>
          </Link>
          <button
            className="bg-red-400 p-2 rounded-md"
            onClick={() =>
              showModal(
                <DeleteSection handleClick={() => handleDelete(row.id)} />
              )
            }
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumbs title={["Author", "Articles"]} />
      <section className="mt-5">
        <h1 className="text-3xl font-extrabold my-4">Articles</h1>
        <Link to={"/articles/form"}>
          <button
            type="button"
            className="text-sm p-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 hover:font-semibold"
          >
            Create Article
          </button>
        </Link>
        <DataTableCustom data={data || []} column={columns} />
      </section>
    </div>
  );
};

export default ArticleAuthor;

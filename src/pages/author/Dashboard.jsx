import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import { MdOutlineArticle } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { AreaChartCustom } from "../../components/AreaChartCustom";

const Dashboard = () => {
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_API_URL}/dashboard`
  );

  if (loading) return <Loading />;
  console.log(data);
  return (
    <div>
      <Breadcrumbs title={["Author", "Dashboard"]} />
      <div className="grid grid-cols-3 gap-10 mt-5">
        <div className="border rounded-md p-4 border-gray-300 shadow-sm">
          <h6 className="font-bold">Total Article</h6>
          <div className="flex gap-2 items-center">
            <MdOutlineArticle size={40} />
            <h2 className="text-3xl">{data?.count_blog}</h2>
          </div>
        </div>
        <div className="border rounded-md p-4 border-gray-300 shadow-sm">
          <h6 className="font-bold">Total Views</h6>
          <div className="flex gap-2 items-center">
            <IoMdEye size={40} />
            <h2 className="text-3xl">{data?.count_view}</h2>
          </div>
        </div>
        <div className="border rounded-md p-4 border-gray-300 shadow-sm">
          <h6 className="font-bold">Total Comments</h6>
          <div className="flex gap-2 items-center">
            <MdOutlineArticle size={40} />
            <h2 className="text-3xl">{data?.count_comment}</h2>
          </div>
        </div>
      </div>
      <div className="h-64 w-full border-gray-300 p-3  shadow-sm my-5 border rounded-md">
        <h6 className="font-bold my-2 ml-10">Views recent last week</h6>
        <AreaChartCustom
          data={data?.view_week || []}
          dataKeyX={"date"}
          dataKeyY={"count_view"}
        />
      </div>
      <div className="h-64 w-full border-gray-300 p-3  shadow-sm my-5 border rounded-md">
        <h6 className="font-bold my-2 ml-10">Interaction recent last week</h6>
        <AreaChartCustom
          data={data?.comment_week || []}
          dataKeyX={"date"}
          dataKeyY={"count_comment"}
        />
      </div>
    </div>
  );
};

export default Dashboard;

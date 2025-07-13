import type { Route } from "./+types/home";
import BlogPage from "~/client/blog/BlogPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Article | Home" },
    { name: "description", content: "Blog Page" },
  ];
}

export default function Blog() {
  return <BlogPage />;
}

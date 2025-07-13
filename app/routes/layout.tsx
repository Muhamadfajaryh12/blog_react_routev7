import type { Route } from "./+types/home";
import BlogPage from "~/client/blog/BlogPage";
import LayoutClient from "~/layout/LayoutClient";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Blog() {
  return <LayoutClient />;
}

import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "routes/layout.tsx", [index("routes/blog.tsx")]),

  layout("./layout/LayoutAuthor.tsx", [
    route("/dashboard", "routes/dashboard.tsx"),
    route("/articles", "routes/articles.tsx"),
    route("/articles/form", "routes/FormArticle.tsx"),
  ]),
] satisfies RouteConfig;

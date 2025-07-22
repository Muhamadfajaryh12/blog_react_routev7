import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Article from "./pages/Article.jsx";
import ClientLayout from "./layouts/ClientLayout.jsx";
import DetailArticle from "./pages/DetailArticle.jsx";
import ProtectedLayout from "./layouts/ProtectedLayout.jsx";
import Dashboard from "./pages/author/Dashboard.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import FormArticleAuthor from "./pages/author/FormArticleAuthor.jsx";
import ArticleAuthor from "./pages/author/ArticleAuthor.jsx";
import ArticleSearch from "./pages/ArticleSearch.jsx";
import ArticleTag from "./pages/ArticleTag.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ClientLayout />}>
            <Route path="/" element={<Article />} />
            <Route path="/search" element={<ArticleSearch />} />
            <Route path="/tag" element={<ArticleTag />} />
            <Route path="/:id" element={<DetailArticle />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/articles" element={<ArticleAuthor />} />
            <Route path="/articles/form" element={<FormArticleAuthor />} />
            <Route path="/articles/form/:id" element={<FormArticleAuthor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

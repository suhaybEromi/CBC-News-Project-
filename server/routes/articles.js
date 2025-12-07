import express from "express";
const router = express.Router();
import articlesController from "../controllers/articles.js";

import {
  articleIdValidator,
  addArticleValidator,
  updateArticleValidator,
  paginationValidator,
} from "../validations/validator.js";

import { handleValidationErrors } from "../validations/handleValidationError.js";

router.get(
  "/get-article",
  paginationValidator,
  handleValidationErrors,
  articlesController.getArticles
);

router.get(
  "/get-article/:id",
  articleIdValidator,
  handleValidationErrors,
  articlesController.getArticlesDetails
);

router.get(
  "/get-article-category/:category",
  paginationValidator,
  handleValidationErrors,
  articlesController.getArticlesByCategory
);

router.post(
  "/add-article",
  addArticleValidator,
  handleValidationErrors,
  articlesController.addArticle
);

router.put(
  "/update-article/:id",
  updateArticleValidator,
  handleValidationErrors,
  articlesController.updateArticle
);

router.delete(
  "/delete-article/:id",
  articleIdValidator,
  handleValidationErrors,
  articlesController.deleteArticle
);
export default router;

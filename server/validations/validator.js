import { body, param, query } from "express-validator";

export const signupValidator = [
  body("username").notEmpty().withMessage("Username is required").trim(),
  body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("role")
    .optional()
    .isIn(["admin", "editor", "viewer"])
    .withMessage("Invalid role"),
];

export const signinValidator = [
  body("email").isEmail().withMessage("Invalid email").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

export const articleIdValidator = [
  param("id").isMongoId().withMessage("Invalid article ID"),
];

export const addArticleValidator = [
  body("title").notEmpty().withMessage("Title is required").trim(),
  body("content").notEmpty().withMessage("Content is required"),
  body("slug").notEmpty().withMessage("Slug is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("image").optional().isString(),
  body("views").optional().isNumeric(),
  body("publishedAt").optional().isISO8601(),
];

export const updateArticleValidator = [
  param("id").isMongoId().withMessage("Invalid article ID"),
  body("title").optional().isString(),
  body("content").optional().isString(),
  body("slug").optional().isString(),
  body("author").optional().isString(),
  body("category").optional().isString(),
  body("image").optional().isString(),
  body("views").optional().isNumeric(),
  body("publishedAt").optional().isISO8601(),
];

export const paginationValidator = [
  query("page").optional().isInt({ min: 1 }).withMessage("Invalid page number"),
  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Invalid limit number"),
];

import Article from "../models/articles.js";

const getArticles = async (req, res, next) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;

    let query = {};

    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
          { category: { $regex: search, $options: "i" } },
        ],
      };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const articles = await Article.find(query)
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Article.countDocuments(query);

    return res.json({
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      totalPages: Math.ceil(total / limit),
      articles,
    });
  } catch (err) {
    console.log(err);
  }
};

const getArticlesDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.json(article);
  } catch (err) {
    console.log(err);
  }
};

const getArticlesByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const articles = await Article.find({ category: category })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Article.countDocuments({ category: category });

    if (articles.length === 0) {
      return res.json({
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit),
        articles: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const addArticle = async (req, res, next) => {
  try {
    const {
      title,
      content,
      slug,
      author,
      category,
      image,
      views,
      publishedAt,
    } = req.body;

    const newArticle = new Article({
      title,
      content,
      slug,
      author,
      category,
      image,
      views,
      publishedAt,
    });

    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    console.log(err);
  }
};

const updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title,
      content,
      slug,
      author,
      category,
      image,
      views,
      publishedAt,
    } = req.body;

    const updateArticle = await Article.findByIdAndUpdate(
      id,
      {
        title,
        content,
        slug,
        author,
        category,
        image,
        views,
        publishedAt,
      },
      { new: true }
    );

    if (!updateArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    return res.json(updateArticle);
  } catch (err) {
    console.log(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Article.findByIdAndDelete(id);
    return res.json({ message: "Article deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getArticles,
  getArticlesDetails,
  getArticlesByCategory,
  addArticle,
  updateArticle,
  deleteArticle,
};

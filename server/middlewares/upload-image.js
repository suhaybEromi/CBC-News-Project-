import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    } else {
      cb(null, "uploads");
    }
  },

  filename: (req, file, cb) => {
    cb(null, Date.now());
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "image/webp" ||
    file.mimetype === "image/svg+xml"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;

const multer = require("multer");
const multerStorage = require("../config/multer.config");
const path = require("path");

function fileFilter(req, file, cb) {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  if (mimeType && extName) {
    return cb(null, true);
  }
  cb(new Error("Only images are allowed"));
}

const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

module.exports = upload;

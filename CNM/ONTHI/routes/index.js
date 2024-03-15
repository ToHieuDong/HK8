const Router = require("express").Router;
const router = Router();

// Path: server/routes/index.js (GET)
router.get("/", (req, res) => {
  res.render("index"); // render file index.ejs trong thư mục views
});

module.exports = router;
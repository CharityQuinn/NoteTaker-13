//import dependencies
const router = require("express").Router();
const apiRoutes = require("./api");  // get index from api folder
const viewRoutes = require("./html"); // get index from the html folder

router.use("/", viewRoutes);
router.use("/api", apiRoutes);

router.get("*", function (req, res) {
  res.send("<h1>404 path not found!</h1>");
});

module.exports = router;







module.exports = router;
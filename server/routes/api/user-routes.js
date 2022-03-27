const router = require("express").Router();
const {
  createUser,
  getOneUser,
  saveMovie,
  deleteMovie,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, saveMovie);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getOneUser);

router.route("/movie/:movie_id").delete(authMiddleware, deleteMovie);

module.exports = router;

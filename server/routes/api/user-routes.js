const router = require("express").Router();
const {
  createUser,
  getOneUser,
  queueMovie,
  getMovie,
  thatMovie,
  shelveMovie,
  deleteQueuedMovie,
  deleteThatMovie,
  deleteGetMovie,
  deleteShelvedMovie,
  login,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, queueMovie, getMovie, thatMovie);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getOneUser);

router.route("/movie/:movie_id").delete(authMiddleware, deleteQueuedMovie, deleteShelvedMovie, deleteThatMovie, deleteGetMovie );

module.exports = router;

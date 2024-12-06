const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const JWTVerifier = require("../middleware/JWTVerifier");

router.use(JWTVerifier);

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;

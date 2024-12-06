const express = require("express");
const router = express.Router();
const JWTVerifier = require("../middleware/JWTVerifier");

router.use(JWTVerifier);

router.route("/").get().post().patch().delete();

module.exports = router;

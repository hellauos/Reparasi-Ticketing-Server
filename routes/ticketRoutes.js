const express = require("express");
const router = express.Router();

router.use(JWTVerifier);

router.route("/").get().post().patch().delete();

module.exports = router;

const express = require("express");

const router = express.Router();

const { login, Signup, example } = require("../controller/UserHandler");
const { isChecker, auth } = require("../middleware/auth");

router.post("/signUp", Signup);
router.post("/login", login);
router.post("/example", auth, isChecker, example);

module.exports = router;

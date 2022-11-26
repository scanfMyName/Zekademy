const router = require("express").Router();
const user_controller = require("../middleware/user_controller");

router.route("/register").post( user_controller.userRegister);
router.route("/login").post(user_controller.userLogin);
module.exports = router;

const  multer = require('multer');


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

upload.single('image')


const router = require("express").Router();
const imageController = require("../middleware/imageController");

router.route("/upload").post(upload.single('image'),imageController.uploadImage);
router.route("/fetch").get(imageController.fetchImage);



module.exports = router;

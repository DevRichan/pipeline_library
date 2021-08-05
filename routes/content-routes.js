const express = require("express");
const router = express.Router();
const {post_data} = require('../controller/content-manager')

router.post('/inputLib',post_data)


module.exports = router
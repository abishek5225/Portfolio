const express = require("express");
const router = express.Router();


const cors = require('cors');
router.use(cors());
router.port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));  

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})
var express = require('express');
var router = express.Router();
const dbWrapper = require("../db/dbWrapper");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    var result = await dbWrapper.getBetter();
    res.status(200).send(result);
  }catch(e){
    console.log(e);
    res.status(500).send(e.message);
  }
 
});

module.exports = router;

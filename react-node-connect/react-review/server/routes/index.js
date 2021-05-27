
var express = require('express');
var router = express.Router();


//router.use(express.json());

router.get('/', function(req, res){
    /**  
    console.log(req.query);
    console.log(req.body);
    console.log(req.params);

    const data = req.query.name;
    **/ 
    //console.log(req);
    res.send({'result' : 'It\'s working! name is '+req.query.name});
});

module.exports = router;

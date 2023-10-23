var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    let x = req.query.x;
    var randomVal =  Math.random().toFixed(2);
    var atan = Math.atan(randomVal).toFixed(2);
    var exp = Math.exp(randomVal).toFixed(2);
    var expm1 = Math.expm1(randomVal).toFixed(2);

    if(x == undefined) {
        x = randomVal;
    }

    res.render('computation', {
        atan: `Math.atan() applied to ${x} is ${atan}`,
        exp: `Math.exp() applied to ${x} is ${exp}`,
        expm1: `Math.expm1() applied to ${x} is ${expm1}`,
    });
});

module.exports = router;
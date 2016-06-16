/**
 * @author [silence_yfang@126.com]
 * @since  2016-06-16
 */
var fs = require('fs'),
    express = require ('express'),
    router = express.Router();

fs.readdirSync('mock').forEach(function (route) {
   if (route.indexOf('index') === -1) {
       require('./' + route)(router);
   }
});

module.exports = router;
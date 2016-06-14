/**
 * @description []
 * @author [silence_yfang@126.com]
 * @date  2016-05-09
 */
/**
 * @description [入口文件]
 * @author [silence_yfang@126.com]
 * @date  2016-05-09
 */
var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
// var chokidar = require('chokidar').watch('./mock');

var app = express();
var compile = webpack(config);
var router = express.Router();


app.use(webpackDevMiddleware(compile, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compile, {
    log: console.log
}));
//////
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(cookieParser());

// app.use(function (res, req, next) {
//     require('./mock')(res, req, next);
// });

// https://github.com/paulmillr/chokidar
// chokidar.on('ready', function () {
//     chokidar.on('all', function () {
//         console.log('Server restarting...');
//
//         Object.keys(require.cache).forEach(function (id) {
//             if (/[\/\\]mock[\/\\]/.test(id)) {
//                 delete require.cache[id];
//             }
//         });
//     });
// });

router.all('*', function (req, res) {
    res.sendfile(__dirname +'/src/' +req.url);
});

app.use('/', router);


app.listen(3000, '127.0.0.1', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('God bless me no bug! listening at http://127.0.0.1:3000');
});
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

var app = express();
var compile = webpack(config);

app.use(webpackDevMiddleware(compile, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compile, {
    log: console.log
}));

var router = express.Router();
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
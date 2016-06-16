/**
 * @description [启动文件]
 * @author [silence_yfang@126.com]
 * @date  2016-05-09
 */
var express = require('express'),
    app = express(),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    config = require('./webpack.config'),
    bodyParser = require('body-parser'),
    chokidar = require('chokidar').watch('./mock'),
    compile = webpack(config),
    router = express.Router();

app.use(webpackDevMiddleware(compile, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));

app.use(webpackHotMiddleware(compile, {
    log: console.log
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(res, req, next) {
    require('./mock')(res, req, next);
});

// https://github.com/paulmillr/chokidar
chokidar.on('ready', function() {
    chokidar.on('all', function() {
        console.log('Server restarting...');

        Object.keys(require.cache).forEach(function(id) {
            if (/[\/\\]mock[\/\\]/.test(id)) {
                delete require.cache[id];
            }
        });
    });
});

router.all('*', function(req, res) {
    res.sendfile(__dirname + '/src/' + req.url);
});

app.use('/', router);


app.listen(3000, '127.0.0.1', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('God bless me no bug! listening at http://127.0.0.1:3000');
});

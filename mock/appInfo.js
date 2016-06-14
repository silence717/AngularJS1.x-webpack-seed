module.exports = function (app) {

    app.get('/apps' , function (req , res) {
        res.json([
            {
                "icon": "assert/images/move.jpg" ,
                "title": "KEEP"
            } ,
            {
                "icon": "assert/images/shutterbugg.jpg" ,
                "title": "小米运动"
            } ,
            {
                "icon": "assert/images/gameboard.jpg" ,
                "title": "咕咚"
            } ,
            {
                "icon": "assert/images/forecast.jpg" ,
                "title": "nike running"
            }
        ]);
    });
};
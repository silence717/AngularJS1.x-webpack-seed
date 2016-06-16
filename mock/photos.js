module.exports = function (app) {

    app.get('/photos' , function (req , res) {
        res.json([
            {
                "title": "Canada" ,
                "author": "Tim Gage" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/canada.jpg" ,
                "pubdate": 1412208000000 ,
                "upvotes": 60 ,
                "views": 1195
            } ,
            {
                "title": "Alps" ,
                "author": "Didier Baertshiger" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/alps.jpg" ,
                "pubdate": 1413590400000 ,
                "upvotes": 67 ,
                "views": 1266
            } ,
            {
                "title": "Elk" ,
                "author": "Thomas Lefebvre" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/elk.jpg" ,
                "pubdate": 1415145600000 ,
                "upvotes": 83 ,
                "views": 3048
            } ,
            {
                "title": "France" ,
                "author": "Didier Baertshiger" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/france.jpg" ,
                "pubdate": 1413590400000 ,
                "upvotes": 55 ,
                "views": 1193
            } ,
            {
                "title": "Gray Fields" ,
                "author": "Jeff Sheldon" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/gray-fields.jpg" ,
                "pubdate": 1418342400000 ,
                "upvotes": 130 ,
                "views": 1283
            } ,
            {
                "title": "Lake" ,
                "author": "Didier Baertshiger" ,
                "url": "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/lake.jpg" ,
                "pubdate": 1416009600000 ,
                "upvotes": 2345 ,
                "views": 139
            }
        ]);
    });
};
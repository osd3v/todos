/*
descarga todas las funciones de 
la documentacion de lodash 

*/ 

var request = require('request'),
    fs = require('fs'),
    cheerio = require('cheerio');
var images = [];
request('https://lodash.com/docs/4.17.4',
    (err, res, html) => {
        if (!err && res.statusCode === 200) {
            var $ = cheerio.load(html);
            var nom = $('h3').toArray();
            var n = nom.length;
            var i = 0;
            for (let i = 0; i < n; i++) {
                var temp = nom[i].attribs.id;
                var cad='h3#'+temp;
                var result=$(cad).text();
                console.log(temp+'    '+result);
                var val=0;
            }

        }
    });
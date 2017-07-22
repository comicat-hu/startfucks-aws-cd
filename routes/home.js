var express = require('express');
var db = require('./db');

function home(req, res) {
    if(!req.session || !req.session.account || !req.session.pwd){
        return res.redirect('/start');
    }

    let account = req.session.account;

    let getData = {
        TableName: "users_data",
        Key:{
            account
        }
    };

    db.dbget(getData, function(data){
        //console.log(data)
    });


    var result = {

    [account]: {
            name: account,
            settings: [
            {
                title: "Time",
                subtitle: "Taiwan",
                gridItemSize: {width: 1, height: 1},
                gridItemLocation: {col: 1, row: 1},
            },
            {
                title: "Weather",
                subtitle: "New Taipei City",
                gridItemSize: {width: 2, height: 1},
                gridItemLocation: {col: 2, row: 3},
            },
            {
                title: "Ubike",
                subtitle: "南港公園",
                gridItemSize: {width: 1, height: 1},
                gridItemLocation: {col: 5, row: 5},
            },]
        }

    };

    return res.render('home', {result: result[account], gridRowNum:10, csrfToken: req.csrfToken()});
}

module.exports = home;

var express = require('express');
var apidata = require('../public/data/apidata.json');
var db = require('./db');

function home(req, res) {

    if(req.method === 'POST'){
        let userData = req.body.userData;
        let keys = Object.keys(userData.settings);
        for(let key of keys){
            if(key.indexOf('Post(') >= 0 && userData.settings[key].postWords == ""){
                userData.settings[key].postWords = null;
            } 
        }

        var userDataSave = {
            TableName: "users_data",
            Item : userData
        }
        console.log("puthome");
        db.dbput(userDataSave).then(function(){
            console.log({put:"put userData"});
        });
            
        return res.send("Auto Saved!");
    }

    if(!req.session || !req.session.account){
        return res.redirect('/start');
    }

    let account = req.session.account;

    
    let getData = {
        TableName: "users_data",
        Key: {account}
    };

    db.dbget(getData, function(data){
        var apiKeys = Object.keys(apidata);
        console.log({getHOME:data.Item.settings})
        return res.render('home', {userData: data.Item, gridRowNum:10, csrfToken: req.csrfToken(),apidata,apiKeys});
    });
         
}

module.exports = home;

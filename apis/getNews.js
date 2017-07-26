var config = require('../config.json');
var apidata = require('../public/data/apidata.json')
var express = require('express');
var request = require('request');
var xmlparser = require('xml2json');
function getNews(req, res){

    let newsSite = (req.body.newsSite.split('_'))[0];
    let subSite = (req.body.newsSite.split('_'))[1];

    if(!subSite){
        return newsOrg(req, res, newsSite, subSite);
    }

    if(newsSite === '聯合(udn)'){
        return udn(req, res, newsSite, subSite);
    }

}
function newsOrg(req, res, newsSite ,subSite){

    let newsSiteId = apidata.news.list[newsSite];
    let url = "https://newsapi.org/v1/articles?source=" + newsSiteId + "&apiKey=" + config.newsorgApiKey;
    var options = { 
        method: 'GET',
        url,
        json: true,
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        let result = [];
        let articles = body.articles;
        for(let i in articles){
            let articleUrl = articles[i].url;
            let articleTitle = articles[i].title
            let articleImg = articles[i].urlToImage;
            let articleDate = articles[i].publishedAt;
            result.push({articleUrl, articleTitle, articleImg, articleDate});
        }

        return res.status(200).send(result);
    });
}
function udn(req, res, newsSite, subSite){

    let newsSiteId = apidata.news.sublist[newsSite][subSite];
    let url = "https://udn.com/rssfeed/news/2/" + newsSiteId + "?ch=news";
    var options = { 
        method: 'GET',
        url,
        json: true,
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        body = xmlparser.toJson(body,{object: true});

        let result = [];
        let articles = body.rss.channel.item;
        for(let i in articles){
            let articleUrl = articles[i].link;
            let articleTitle = articles[i].title
            let articleDate = articles[i].pubDate;

            let articleImg = "";
            let des = articles[i].description;
            let imgTagIndex = des.indexOf("<img src=");
            if(imgTagIndex >= 0){
                for(let i = imgTagIndex+9; i < des.length; i++){
                    articleImg += des[i];
                    if(des[i] === '\"' && des[i+1] === '>'){
                        break;
                    }
                }
            }

            result.push({articleUrl, articleTitle, articleImg, articleDate});
        }

        return res.status(200).send(result);
    });
}
module.exports = getNews;
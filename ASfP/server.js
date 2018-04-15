var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var storage = require('azure-storage');
var assert = require('assert');
var AZURE_STORAGE_ACCOUNT = 'asfptbl';
var AZURE_STORAGE_ACCESS_KEY = 'h4bDfcQ/NJAH2CiyN2ruqBBfbQgb2/1LHVsT8rpDJ0v2ybDEiWLw/wWNxyKkZUVRc6S5Z/VJGObDV5hQLOnOsA==';
var AZURE_STORAGE_TABLE = 'asfpTable';
var pEnv = process.env;
var tableService = storage.createTableService(AZURE_STORAGE_ACCOUNT, AZURE_STORAGE_ACCESS_KEY);

app.use(express.static(__dirname + '/server'));

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static('public'));

app.post('/js/server', urlencodedParser, function (req, res) {
    console.log(req.body);
});
http.listen(8080, function () {
    console.log("Server listening on 8080");
});

//function myquery() {
//    readConfig(function(){});
//}

//function readConfig(callback) {
//    tableService.queryEntities(AZURE_STORAGE_TABLE,null, null,
//        function (error, result, response){
//            if (!error) {
//                console.log(result.entries);
//            }
//            else {
//                console.log(error.message);
//            }
//            assert.equal(error, null);
//    assert.notEqual(result, null);
//    assert.notEqual(result.entries, null);

//    var entities = result.entries;
//    //assert.equal(entities.length, 2);
//    var entityResult = entities[0];
//    assert.equal(entityResult.stringfield._, entity1.stringfield._);
//    assert.equal(entityResult.longfield._, entity1.longfield._);

//    callback();
//    });

//}

//myquery();
//module.exports = readConfig();

/*
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public'));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'copedb'
});
connection.connect();

app.post('/blah', function (req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
    var query = connection.query('insert into cope set ?', cope, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    });
    //res.send('received the data.');
});
app.listen(8080);

var tableService = AzureStorage.createTableService('asfptbl', 'h4bDfcQ/NJAH2CiyN2ruqBBfbQgb2/1LHVsT8rpDJ0v2ybDEiWLw/wWNxyKkZUVRc6S5Z/VJGObDV5hQLOnOsA==');
var table = "asfpTable";
$scope.orderSubmission = JSON.stringify(entity);
tableService.insertOrMergeEntity(table, entity, function (error, result, response) {  //TODO: Add error handling
    if (error) {
        console.log('Insert table entity error, please open browser console to view detailed error');
        console.log(error);
    } else {
        console.log('Insert table entity successfully!');
    }

    router.get('/login', function (req, res, next) {
        var username = req.query.name;
        res.json({ 'status': 200, 'msg': 'success' });
    } */
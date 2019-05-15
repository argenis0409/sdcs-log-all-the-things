const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    // write your logging code here
    var agent = req.headers['user-agent'];
    var time = new Date().toISOString("");
    var method = req.method;
    var resource = req.url;
    var version = 'HTTP/' + req.httpVersion;
    var status = '200';
    var loggers = `${agent},${time},${method},${resource},${version},${status}\n`;

    fs.appendFile('./log.csv', loggers, err => {
        if (err) {
            throw err;
        } next();
    })
    console.log(loggers)
});

app.get('/', (req, res) => {
    // write your code to respond "ok" here
    res.status(200).send('ok');

});

app.get('/logs', (req, res) => {
    // write your code to return a json object containing the log data here
    fs.readFile('log.csv', 'utf8', (err, data) => {

        if (err) throw err;
        console.log('uh oh there was an err');

        var dataBack = data.split("\n");
        dataBack.shift();

        var jsonData = [];
        dataBack.forEach(line => {
            var contents = line.split(",");

            var jsonContent = {

                "Agent": contents[0],
                "Time": contents[1],
                "Method": contents[2],
                "Resource": contents[3],
                "Version": contents[4],
                "Status": contents[5],
            }

            if (contents[0] !== "") {
                jsonData.push(jsonContent);
            }

        })

        res.json(jsonData);
    });

});

module.exports = app;

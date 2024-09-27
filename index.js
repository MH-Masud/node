var http = require('http');
const { text } = require('stream/consumers');
var url = require('url');


http.createServer((req, res) => {
    res.writeHead(200, {'Content':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = '';
    txt += q.year + " " + q.month;
    res.end(txt)
}).listen(8080);
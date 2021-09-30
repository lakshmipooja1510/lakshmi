var http = require('http')
var url = require('url')
var fs = require('fs')
var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname
    console.log(path + ' ' + __dirname)
    switch (path) {
        case '/index.html':
            fs.readFile(__dirname + path, function (error, data) {
                if (error) {
                    response.writeHead(404)
                    response.write('' + error)
                    response.end()
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/html' })
                    response.write(data)
                    response.end()
                }
            })
            break
        default:
            response.writeHead(404)
            response.write("opps this doesn't exist - 404")
            response.end()
            break
    }
})
server.listen(5500)
// var http = require('http')
// var url = require('url')
// var fs = require('fs')
// http.createServer(function (req, res) {
//   var filename = '.' + req.url ;
//   if(filename == './'){
//     filename = './index.html';
//   }
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       if(err.code == 'ENOENT'){
//         fs.readFile('./404.html', function(err,data){
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           res.end(data, 'utf-8')
//         })
//       }
//       else{
//         res.writeHead(500);
//         res.end('sorry error occured !!!!'+ err.code+ '.. \n');
//       }
//     }
//     else{
//       res.writeHead(200, { 'Content-Type': 'text/html' })
//       res.end(data, 'utf-8')
//     }
//   });
// }).listen(5500)

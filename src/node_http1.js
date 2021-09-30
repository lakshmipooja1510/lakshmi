var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')
var server = http.createServer(function (request, response) {
    var path_ = url.parse(request.url).path
    var ext_name = path.extname(path_)
    var contentType
    if (ext_name == '.html') {
        contentType = 'text/html'
    } else if (ext_name == '.css') {
        contentType = 'text/css'
    } else if (ext_name == '.js') {
        contentType = 'text/javascript'
    } else if (ext_name == '.svg') {
        contentType = 'image/svg+xml'
    }
    fs.readFile(__dirname + path_, function (error, data) {
        if (error) {
            response.writeHead(404)
            response.write(' ' + error)
            response.end()
        } else {
            response.writeHead(200, { 'Content-Type': contentType })
            response.write(data)
            response.end()
        }
    })
})
server.listen(5500)

var http = require('http')
const url = require('url')
var fs = require('fs')
// ..............................importing timezone......................................
const timeZones = require('./src/timeZone.js');
var weatherResult = []
var server = http.createServer(function (request, response) {
        var req_url = url.parse(request.url, true)
    var end_point = req_url.pathname
    if (end_point == '/all-timezone-cities') {
        response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
        weatherResult = timeZones.allTimeZones()
        response.end(JSON.stringify(weatherResult))
    }
    if (end_point == '/') {
        var city_ = req_url.query.city
        if (city_) {
            response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
            response.end(JSON.stringify(timeZones.timeForOneCity(city_)))
        }
    }

    if (end_point == '/hourly-forcast') {
        response.writeHead(200, { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'})
        let data = ''
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on('end', () => {
            let request_body = JSON.parse(data)
            console.log(request_body);
            let cityDTN = request_body.city_Date_Time_Name
            let hours = request_body.hours
            weatherResult = timeZones.allTimeZones()
            if (cityDTN && hours) {
                response.end(
                    JSON.stringify(
                        timeZones.nextNhoursWeather(
                            cityDTN,
                            hours,
                            weatherResult
                        )
                    )
                )
            }
            response.end()
        })
    } 
    // else {
    //     response.writeHead(404)
    //     response.write(' not a valid end point' )
    //     response.end()
    // } 
})
server.listen(8000)
console.log('listening to port 8000')
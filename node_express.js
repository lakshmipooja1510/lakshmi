// ..............................................importing express module.......................................
var express = require('express')
var app = express()
// .........................................importing child process module........................................
const childProcess = require('child_process')
// .........................................importing body parser module........................................
var bodyParser = require('body-parser')
// ...........................................importing cors module..............................................
const cors = require('cors')
app.use(cors())
// ...........................................rendering the webpage.............................................
app.use(express.static('public'))
app.use(express.json())
// .......................................get request for all-timezone-cities.................................
app.get('/all-timezone-cities', (req, res) => {
    let child_obj2 = { function_name: 'all_city_data' }
    let child2 = childProcess.fork('./child_process.js')
    child2.send(child_obj2)
    child2.on('message', (data) => {
        res.send(data)
    })
})
// .............................get request for city data............................................................
app.get('/city/:city', (req, res) => {
    var city = req.params.city
    if (city) {
        let child_obj = { function_name: 'get_city_data', city_name: `${city}` }
        let child1 = childProcess.fork('./child_process.js')
        child1.send(child_obj)
        child1.on('message', (data) => {
            res.json(data)
        })
    } else {
        res.status(404).json({
            Error: 'Not a valid end point.please check API doc',
        })
    }
})
// ...........................post request for the hourly-forecast........................................
app.post('/hourly-forcast', (req, res) => {
    let cityDTN = req.body.city_Date_Time_Name
    let hours = req.body.hours
    if (cityDTN && hours) {
        var child_obj3 = {
            function_name: 'next_weather_data',
            cityDTN: `${cityDTN}`,
            hours: `${hours}`,
        }
        var child3 = childProcess.fork('./child_process.js')
        child3.send(child_obj3)
        child3.on('message', (data) => {
            res.json(data)
        })
    } else {
        res.status(404).json({
            Error: 'Not a valid end point.please check API doc',
        })
    }
})
// ..................................listening to the port 8000
app.listen(8000, function () {
    console.log('listening to port 8000')
})

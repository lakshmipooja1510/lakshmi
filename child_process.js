// ...................................importing event module......................................................
const event = require('events')
const event_emitter = new event.EventEmitter()
//......................................importing time zone......................................................
const timezones = require('./public/src/timeZone.js')
// ...................................fetching data from timezones.allTimeZones...................................
function all_city_data() {
    var all_city = timezones.allTimeZones()
    process.send(all_city)
    process.exit()
}
// .................................firing all_city_data using event emitter........................................
event_emitter.on('all_city_data', (data) => {
    all_city_data(data)
})
// ...................................fetching data from timezones.timeForOneCity...................................
function get_city_data(city) {
    var city_data = timezones.timeForOneCity(city)
    process.send(city_data)
    process.exit()
}
// .................................firing get_city_data using event emitter........................................
event_emitter.on('get_city_data', (data) => {
    get_city_data(data.city_name)
})
// .......................fetching data from timezones.allTimeZones and nextNhoursWeather............................
function next_weather_data(ctdn, hrs) {
    var all_city = timezones.allTimeZones()
    var hours = timezones.nextNhoursWeather(ctdn, hrs, all_city)
    process.send(hours)
    process.exit()
}
// .................................firing next_weather_data using event emitter........................................
event_emitter.on('next_weather_data', (data) => {
    next_weather_data(data.cityDTN, data.hours)
})
// .................................firing the process using event emitter........................................
process.on('message', (data) => {
    event_emitter.emit(data.function_name, data)
})

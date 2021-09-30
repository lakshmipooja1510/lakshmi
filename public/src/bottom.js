// ..........................................Date from JSON...................................................
let data ='{"nome": {"cityName": "Nome","dateAndTime": "3/31/2020, 9:21:46 PM","timeZone": "America/Nome","temperature": "4°C","humidity": "91%","precipitation": "8%","nextFiveHrs": ["6°C", "7°C", "11°C", "2°C"]},"newyork": {"cityName": "NewYork","dateAndTime": "4/1/2020, 1:21:46 AM","timeZone": "America/New_york","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["18°C", "20°C", "18°C", "17°C"]},"juba": {"cityName": "Juba","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Africa/Juba","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["37°C", "41°C", "38°C", "37°C"]},"maseru": {"cityName": "Maseru","dateAndTime": "4/1/2020, 7:21:46 AM", "timeZone": "Africa/Maseru","temperature": "43°C","humidity": "10%","precipitation": "86%","nextFiveHrs": ["17°C", "17°C", "19°C", "15°C"]},"london": {"cityName": "London","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/London","temperature": "7°C","humidity": "85%","precipitation": "14%","nextFiveHrs": ["-7°C", "-6°C", "-5°C", "-10°C"]}, "vienna": {"cityName": "Vienna","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Europe/Vienna","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["-1°C", "-1°C", "4°C", "-2°C"]}, "kolkata": {"cityName": "Kolkata","dateAndTime": "4/1/2020, 10:51:46 AM","timeZone": "Asia/Kolkata","temperature": "34°C","humidity": "29%","precipitation": "68%","nextFiveHrs": ["33°C", "35°C", "37°C", "32°C"]},  "yangon": {"cityName": "Yangon","dateAndTime": "4/1/2020, 11:51:46 AM","timeZone": "Asia/Yangon","temperature": "24°C","humidity": "50%","precipitation": "48%","nextFiveHrs": ["31°C", "32°C", "36°C", "27°C"]}, "brokenhill": {"cityName": "BrokenHill","dateAndTime": "4/1/2020, 3:51:46 PM","timeZone": "Australia/Broken_Hill","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["17°C", "21°C", "22°C", "15°C"]},  "perth": {"cityName": "Perth","dateAndTime": "4/1/2020, 1:21:46 PM","timeZone": "Australia/Perth","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["6°C", "10°C", "11°C", "6°C"]},  "auckland": {"cityName": "Auckland","dateAndTime": "4/1/2020, 6:21:46 PM","timeZone": "Pacific/Auckland","temperature": "17°C","humidity": "64%","precipitation": "34%","nextFiveHrs": ["17°C", "19°C", "18°C", "17°C"]}, "troll": {"cityName": "Troll","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Antarctica/Troll","temperature": "-52°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-70°C", "-70°C", "-66°C", "-71°C"]}}';
let mydata = JSON.parse(data);
//.................................................array declaration .........................................
const continent_array = [];
var i = 0;
const city_array = [];
var j = 0;
const time_array = [];
var k = 0;
const temp_array = [];
var l = 0;
const humidity_array = [];
var m = 0;
//..............................Storing the value from JSON object into array..................................
for (let key in mydata) {
  for (let key1 in mydata[key]) {
    let t = mydata[key]['timeZone'];
    let a = t.substr(0, t.indexOf('/'));
    continent_array[i] = a;
    i++
    break;
  }
}
for (let key in mydata) {
  for (let key1 in mydata[key]) {
    let t = mydata[key]['cityName'];
    city_array[j] = t;
    j++;
    break;
  }
}
for (let key in mydata) {
  for (let key1 in mydata[key]) {
    let t = mydata[key]['dateAndTime'];
    let a = t.substr(t.indexOf(',') + 1, t.length);
    time_array[k] = a;
    k++;
    break;
  }
}
for (let key in mydata) {
  for (let key1 in mydata[key]) {
    let t = mydata[key]['temperature'];
    temp_array[l] = t;
    l++;
    break;
  }
}
for (let key in mydata) {
  for (let key1 in mydata[key]) {
    let t = mydata[key]['humidity'];
    humidity_array[m] = t;
    m++;
    break;
  }
}
//....................................selecting all the elements using the class name..........................
const conti_element = document.querySelectorAll('.conti');
const city_element = document.querySelectorAll('.town')
const time_element = document.querySelectorAll('.time-t')
const temp_element = document.querySelectorAll('.val')
const humidity_element = document.querySelectorAll('.percent')
//......................value to display when the page is loaded inside the grid elements.....................
for (let i = 0; i < conti_element.length; i++) {
  conti_element[i].innerHTML = continent_array[i]
  city_element[i].innerHTML = city_array[i]
  time_element[i].innerHTML = time_array[i]
  temp_element[i].innerHTML = temp_array[i]
  humidity_element[i].innerHTML = humidity_array[i]
}
//................declaring temp array letiable for sorting based on the continent name........................
let temp_continent_array = []
temp_continent_array = continent_array.slice()

const temp_city_array = []
const temp_time_array = []
const temp_temperature_array = []
const temp_humidity_array = []

let index_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let large = temp_continent_array[0]

for (let i = 0; i < temp_continent_array.length; i++) {
  for (let j = i + 1; j < temp_continent_array.length; j++) {
    if (temp_continent_array[i] > temp_continent_array[j]) {
      let t = temp_continent_array[i]
      temp_continent_array[i] = temp_continent_array[j]
      temp_continent_array[j] = t
      let q = index_array[i]
      index_array[i] = index_array[j]
      index_array[j] = q
    }
  }
}
//...........................sorting all the elements based on the continent name..........................
for (i = 0; i < temp_continent_array.length; i++) {
  temp_city_array[i] = city_array[index_array[i]]
  temp_time_array[i] = time_array[index_array[i]]
  temp_temperature_array[i] = temp_array[index_array[i]]
  temp_humidity_array[i] = humidity_array[index_array[i]]
}
//.....................function when the continent name is clicked to display the sorted values...............
document.getElementById('conti-name').addEventListener('click', function () {
    this.style.color = this.style.color === 'tomato' ? 'white' : 'tomato'
  if (this.style.color == 'tomato') {
    for (let i = 0; i < conti_element.length; i++) {
      conti_element[i].innerHTML = temp_continent_array[i]
      city_element[i].innerHTML = temp_city_array[i]
      time_element[i].innerHTML = temp_time_array[i]
      temp_element[i].innerHTML = temp_temperature_array[i]
      humidity_element[i].innerHTML = temp_humidity_array[i]
    }
  } 
  else {
    for (let i = 0; i < conti_element.length; i++) {
      conti_element[i].innerHTML = continent_array[i]
      city_element[i].innerHTML = city_array[i]
      time_element[i].innerHTML = time_array[i]
      temp_element[i].innerHTML = temp_array[i]
      humidity_element[i].innerHTML = humidity_array[i]
    }
  }
})
//.......................temp variable for sorting based on the temp value................................
let continent_sort_array = []
let city_sort_array = []
let time_sort_array = []
let temp_sort_array = []
let humidity_sort_array = []
let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
for (let i = 0; i < continent_array.length; i++) {
  temp_sort_array[i] = parseInt(temp_array[i].substr(0, temp_array[i].indexOf('°')))
}
for (let i = 0; i < continent_array.length; i++) {
  for (j = i + 1; j < continent_array.length; j++) {
    if (temp_sort_array[i] > temp_sort_array[j]) {
      let l = temp_sort_array[i]
      temp_sort_array[i] = temp_sort_array[j]
      temp_sort_array[j] = l
      let o = index[i]
      index[i] = index[j]
      index[j] = o
    }
  }
}
//....................sorting all the elements based on the temperature value................................
for (let i = 0; i < continent_array.length; i++) {
  continent_sort_array[i] = continent_array[index[i]]
  city_sort_array[i] = city_array[index[i]]
  time_sort_array[i] = time_array[index[i]]
  humidity_sort_array[i] = humidity_array[index[i]]
}
/**
 * @desc sorting the cards based on continent name and temp value
 */
document.getElementById('temp-name').addEventListener('click', function () {
  this.style.color = this.style.color === 'tomato' ? 'white' : 'tomato'
  if (this.style.color == 'tomato') {
    for (let i = 0; i < conti_element.length; i++) {
      conti_element[i].innerHTML = continent_sort_array[i]
      city_element[i].innerHTML = city_sort_array[i]
      time_element[i].innerHTML = time_sort_array[i]
      temp_element[i].innerHTML = temp_sort_array[i] + '°C'
      humidity_element[i].innerHTML = humidity_sort_array[i]
    }
  } 
  else {
    for (let i = 0; i < conti_element.length; i++) {
      conti_element[i].innerHTML = continent_array[i]
      city_element[i].innerHTML = city_array[i]
      time_element[i].innerHTML = time_array[i]
      temp_element[i].innerHTML = temp_array[i]
      humidity_element[i].innerHTML = humidity_array[i]
    }
  }
})
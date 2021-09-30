var data1 ='{"nome": {"cityName": "Nome","dateAndTime": "3/31/2020, 9:21:46 PM","timeZone": "America/Nome","temperature": "4°C","humidity": "91%","precipitation": "8%","nextFiveHrs": ["6°C", "7°C", "11°C", "2°C"]},"newyork": {"cityName": "NewYork","dateAndTime": "4/1/2020, 1:21:46 AM","timeZone": "America/New_york","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["18°C", "20°C", "18°C", "17°C"]},"jamaica": {"cityName": "Jamaica","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Jamaica","temperature": "29°C","humidity": "39%","precipitation": "58%","nextFiveHrs": ["24°C", "27°C", "28°C", "24°C"]},"losangeles": {"cityName": "LosAngeles","dateAndTime": "3/31/2020, 10:21:46 PM","timeZone": "America/Los_Angeles","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["19°C", "21°C", "23°C", "18°C"]},"winnipeg": {"cityName": "Winnipeg","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Winnipeg","temperature": "9°C","humidity": "81%","precipitation": "18%","nextFiveHrs": ["3°C", "7°C", "4°C", "-1°C"]},"juba": {"cityName": "Juba","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Africa/Juba","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["37°C", "41°C", "38°C", "37°C"]},"maseru": {"cityName": "Maseru","dateAndTime": "4/1/2020, 7:21:46 AM", "timeZone": "Africa/Maseru","temperature": "43°C","humidity": "10%","precipitation": "86%","nextFiveHrs": ["17°C", "17°C", "19°C", "15°C"]},"london": {"cityName": "London","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/London","temperature": "7°C","humidity": "85%","precipitation": "14%","nextFiveHrs": ["-7°C", "-6°C", "-5°C", "-10°C"]}, "vienna": {"cityName": "Vienna","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Europe/Vienna","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["-1°C", "-1°C", "4°C", "-2°C"]},  "moscow": {"cityName": "Moscow","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Europe/Moscow","temperature": "11°C","humidity": "77%","precipitation": "22%","nextFiveHrs": ["12°C", "14°C", "15°C", "8°C"]},  "dublin": {"cityName": "Dublin","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/Dublin","temperature": "15°C","humidity": "68%","precipitation": "30%","nextFiveHrs": ["24°C", "28°C", "29°C", "21°C"]},  "karachi": {"cityName": "Karachi","dateAndTime": "4/1/2020, 10:21:46 AM","timeZone": "Asia/Karachi","temperature": "25°C","humidity": "47%","precipitation": "50%","nextFiveHrs": ["21°C", "24°C", "21°C", "19°C"]},  "kolkata": {"cityName": "Kolkata","dateAndTime": "4/1/2020, 10:51:46 AM","timeZone": "Asia/Kolkata","temperature": "34°C","humidity": "29%","precipitation": "68%","nextFiveHrs": ["33°C", "35°C", "37°C", "32°C"]},  "yangon": {"cityName": "Yangon","dateAndTime": "4/1/2020, 11:51:46 AM","timeZone": "Asia/Yangon","temperature": "24°C","humidity": "50%","precipitation": "48%","nextFiveHrs": ["31°C", "32°C", "36°C", "27°C"]},  "bangkok": {"cityName": "BangKok","dateAndTime": "4/1/2020, 12:21:46 PM","timeZone": "Asia/BangKok","temperature": "32°C","humidity": "33%","precipitation": "64%","nextFiveHrs": ["32°C", "34°C", "32°C", "32°C"]},  "seoul": {"cityName": "Seoul","dateAndTime": "4/1/2020, 2:21:46 PM","timeZone": "Asia/Seoul","temperature": "6°C","humidity": "87%","precipitation": "12%","nextFiveHrs": ["1°C", "1°C", "3°C", "0°C"]},  "anadyr": {"cityName": "Anadyr","dateAndTime": "4/1/2020, 5:21:46 PM","timeZone": "Asia/Anadyr","temperature": "-2°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-1°C", "3°C", "-1°C", "-3°C"]},  "brokenhill": {"cityName": "BrokenHill","dateAndTime": "4/1/2020, 3:51:46 PM","timeZone": "Australia/Broken_Hill","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["17°C", "21°C", "22°C", "15°C"]},  "perth": {"cityName": "Perth","dateAndTime": "4/1/2020, 1:21:46 PM","timeZone": "Australia/Perth","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["6°C", "10°C", "11°C", "6°C"]},  "auckland": {"cityName": "Auckland","dateAndTime": "4/1/2020, 6:21:46 PM","timeZone": "Pacific/Auckland","temperature": "17°C","humidity": "64%","precipitation": "34%","nextFiveHrs": ["17°C", "19°C", "18°C", "17°C"]},  "vostok": {"cityName": "Vostok","dateAndTime": "4/1/2020, 11:21:46 AM","timeZone": "Antarctica/Vostok","temperature": "-61°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-64°C", "-59°C", "-64°C", "-68°C"]},  "troll": {"cityName": "Troll","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Antarctica/Troll","temperature": "-52°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-70°C", "-70°C", "-66°C", "-71°C"]}}'
var mydata1 = JSON.parse(data1)
//.................................. catagorized the cities as rainy sunny snowy..................................
;(function () {
  const section_element = document.querySelectorAll('.sec1')
  for (i = 3; i < 14; i++) {
    section_element[i].style.display = 'none'
  }
  var b = document.getElementById('blue')
  b.style.display = 'block'
  var b1 = document.getElementById('blue1')
  b1.style.display = 'none'
  var b2 = document.getElementById('blue2')
  b2.style.display = 'none'
})()
const windy = []
var i = 0
const sunny = []
var j = 0
const snowy = []
var k = 0
var button1 = document.getElementById('arrow-left')
/**
 * @desc scroll right
 */
button1.onclick = function () {
  var container = document.getElementById('city-cards-container')
  container.scrollLeft-=25;
}
var button2 = document.getElementById('arrow-right')
/**
 * @desc scroll left
 */
button2.onclick = function () {
  var container = document.getElementById('city-cards-container')
  container.scrollLeft+=25;
}
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var a = mydata1[key]['temperature'].substr(0,mydata1[key]['temperature'].indexOf('°'))
    var t1 = parseInt(a)
    var b = mydata1[key]['humidity'].substr(0,mydata1[key]['humidity'].indexOf('%'))
    var t2 = parseInt(b)
    var c = mydata1[key]['precipitation'].substr(0,mydata1[key]['precipitation'].indexOf('%')
    )
    var t3 = parseInt(c)
    if (t1 < 20 && t2 >= 50) {
      windy[i] = mydata1[key]['cityName']
      i++
      break
    }
    if (t1 >= 20 && t1 <= 28 && t2 > 50 && t3 < 50) {
      snowy[k] = mydata1[key]['cityName']
      k++
      break
    }
    if (t1 > 29 && t2 < 50 && t3 >= 50) {
      sunny[j] = mydata1[key]['cityName']
      j++
      break
    }
  }
}
var city_array_card = []
var i = 0
var time_array_card = []
var j = 0
var date_array_card = []
var k = 0
var temp_array_card = []
var l = 0
var humidity_array_card = []
var m = 0
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var t = mydata1[key]['cityName']
    city_array_card[i] = t
    i++
    break
  }
}
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var t = mydata1[key]['dateAndTime']
    var a = t.substr(t.indexOf(',') + 1, t.length)
    time_array_card[j] = a
    j++
    break
  }
}
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var t = mydata1[key]['dateAndTime']
    var a = t.substr(0, t.indexOf(','))
    date_array_card[k] = a
    k++
    break
  }
}
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var t = mydata1[key]['temperature']
    temp_array_card[l] = t
    l++
    break
  }
}
for (var key in mydata1) {
  for (var key1 in mydata1[key]) {
    var t = mydata1[key]['humidity']
    humidity_array_card[m] = t
    m++
    break
  }
}
var sunny_temp = []
var k1 = 0
for (var key in mydata1) {
  for (var i = 0; i < sunny.length; i++) {
    if (mydata1[key]['cityName'] == sunny[i]) {
      sunny_temp[k1] = mydata1[key]['temperature']
      k1++
    }
  }
}
var windy_temp = []
k1 = 0
for (var key in mydata1) {
  for (var i = 0; i < windy.length; i++) {
    if (mydata1[key]['cityName'] == windy[i]) {
      windy_temp[k1] = mydata1[key]['temperature']
      k1++
    }
  }
}
var snowy_temp = []
k1 = 0
for (var key in mydata1) {
  for (var i = 0; i < snowy.length; i++) {
    if (mydata1[key]['cityName'] == snowy[i]) {
      snowy_temp[k1] = mydata1[key]['temperature']
      k1++
    }
  }
}
var sunny_time = []
var sunny_date = []
var k2 = 0
for (var key in mydata1) {
  for (var i = 0; i < sunny.length; i++) {
    if (mydata1[key]['cityName'] == sunny[i]) {
      var a = mydata1[key]['dateAndTime']
      sunny_date[k2] = a.substr(0, a.indexOf(','))
      sunny_time[k2] = a.substr(a.indexOf(',') + 1, a.length)
      k2++
    }
  }
}
var windy_time = []
var windy_date = []
k2 = 0
for (var key in mydata1) {
  for (var i = 0; i < windy.length; i++) {
    if (mydata1[key]['cityName'] == windy[i]) {
      var a = mydata1[key]['dateAndTime']
      windy_date[k2] = a.substr(0, a.indexOf(','))
      windy_time[k2] = a.substr(a.indexOf(',') + 1, a.length)
      k2++
    }
  }
}
var snowy_time = []
var snowy_date = []
var k2 = 0
for (var key in mydata1) {
  for (var i = 0; i < snowy.length; i++) {
    if (mydata1[key]['cityName'] == snowy[i]) {
      var a = mydata1[key]['dateAndTime']
      snowy_date[k2] = a.substr(0, a.indexOf(','))
      snowy_time[k2] = a.substr(a.indexOf(',') + 1, a.length)
      k2++
    }
  }
}
var sunny_humidity = []
var k3 = 0
for (var key in mydata1) {
  for (var i = 0; i < sunny.length; i++) {
    if (mydata1[key]['cityName'] == sunny[i]) {
      sunny_humidity[k3] = mydata1[key]['humidity']
      k3++
    }
  }
}
var windy_humidity = []
k3 = 0
for (var key in mydata1) {
  for (var i = 0; i < windy.length; i++) {
    if (mydata1[key]['cityName'] == windy[i]) {
      windy_humidity[k3] = mydata1[key]['humidity']
      k3++
    }
  }
}
var snowy_humidity = []
k3 = 0
for (var key in mydata1) {
  for (var i = 0; i < snowy.length; i++) {
    if (mydata1[key]['cityName'] == snowy[i]) {
      snowy_humidity[k3] = mydata1[key]['humidity']
      k3++
    }
  }
}
var sunny_precip = []
var k4 = 0
for (var key in mydata1) {
  for (var i = 0; i < sunny.length; i++) {
    if (mydata1[key]['cityName'] == sunny[i]) {
      sunny_precip[k4] = mydata1[key]['precipitation']
      k4++
    }
  }
}
var windy_precip = []
k4 = 0
for (var key in mydata1) {
  for (var i = 0; i < windy.length; i++) {
    if (mydata1[key]['cityName'] == windy[i]) {
      windy_precip[k4] = mydata1[key]['precipitation']
      k4++
    }
  }
}
var snowy_precip = []
k4 = 0
for (var key in mydata1) {
  for (var i = 0; i < snowy.length; i++) {
    if (mydata1[key]['cityName'] == snowy[i]) {
      snowy_precip[k4] = mydata1[key]['precipitation']
      k4++
    }
  }
}
/**
 * @desc when the icon sunny is cliked this function is executed
 */
// const sun_icon_click = document.getElementById('sticky-1');
window.onload = myFunction1;
function myFunction1() {
  const city_element_card = document.querySelectorAll('.text-1')
  const temp_element_card = document.querySelectorAll('.text')
  const section_element = document.querySelectorAll('.sec1')
  const card_icon = document.querySelectorAll('.ic')
  const time_element_card = document.querySelectorAll('.time-10')
  const date_element_card = document.querySelectorAll('.date-a1')
  const humidity_element_card = document.querySelectorAll('.hum')
  const precipitation_element_card = document.querySelectorAll('.precip-1')
  var spinner_val = parseInt(document.getElementById('quantity').value)
  var length = sunny.length
  if (spinner_val != NaN && spinner_val < length) {
    length = spinner_val
  }
  for (var i = 0; i < length; i++) {
    section_element[i].style.display = 'block'
    city_element_card[i].innerHTML = sunny[i]
    temp_element_card[i].innerHTML = sunny_temp[i]
    time_element_card[i].innerHTML = sunny_time[i]
    date_element_card[i].innerHTML = sunny_date[i]
    card_icon[i].style.background='url(./././assets/img/sunnyIcon.svg)';
    card_icon[i].style.backgroundRepeat = 'no-repeat'
    card_icon[i].style.backgroundPosition = 'center'
    card_icon[i].style.backgroundSize = '20px'
    humidity_element_card[i].innerHTML = sunny_humidity[i]
    precipitation_element_card[i].innerHTML = sunny_precip[i]
    section_element[i].style.background ='url(./././assets/img/' + sunny[i] + '.svg)'
    section_element[i].style.backgroundSize = '50%'
    section_element[i].style.backgroundRepeat = 'no-repeat'
    section_element[i].style.backgroundColor = ' #2e2e2e'
    section_element[i].style.backgroundPosition = 'bottom right'
  }
  for (var i = length; i < 14; i++) {
    if (section_element[i].style.display === 'block') {
      section_element[i].style.display = 'none'
    }
  }
  var b = document.getElementById('blue')
  if (b.style.display == 'none') {
    b.style.display = 'block'
  }
  var b1 = document.getElementById('blue1')
  b1.style.display = 'none'
  var b2 = document.getElementById('blue2')
  b2.style.display = 'none'
}
/**
 * @desc when the icon windy is cliked this function is executed
 */
function myFunction2() {
  const city_element_card = document.querySelectorAll('.text-1')
  const temp_element_card = document.querySelectorAll('.text')
  const section_element = document.querySelectorAll('.sec1')
  const time_element_card = document.querySelectorAll('.time-10')
  const card_icon = document.querySelectorAll('.ic')
  const date_element_card = document.querySelectorAll('.date-a1')
  const humidity_element_card = document.querySelectorAll('.hum')
  const precipitation_element_card = document.querySelectorAll('.precip-1')
  var spinner_val = parseInt(document.getElementById('quantity').value)
  var length = windy.length
  if (spinner_val != NaN && spinner_val < length) {
    length = spinner_val
  }
  for (var i = 0; i < length; i++) {
    section_element[i].style.display = 'block'
    city_element_card[i].innerHTML = windy[i]
    temp_element_card[i].innerHTML = windy_temp[i]
    time_element_card[i].innerHTML = windy_time[i]
    date_element_card[i].innerHTML = windy_date[i]
    humidity_element_card[i].innerHTML = windy_humidity[i]
    precipitation_element_card[i].innerHTML = windy_precip[i]
    section_element[i].style.background ='url(./././assets/img/' + windy[i] + '.svg)'
    card_icon[i].style.background = 'url(./././assets/img/windyIcon.svg)'
    card_icon[i].style.backgroundRepeat = 'no-repeat'
    card_icon[i].style.backgroundPosition = 'center'
    card_icon[i].style.backgroundSize = '20px'
    section_element[i].style.backgroundSize = '50%'
    section_element[i].style.backgroundRepeat = 'no-repeat'
    section_element[i].style.backgroundColor = ' #2e2e2e'
    section_element[i].style.backgroundPosition = 'bottom right'
  }
  for (var i = length; i < 14; i++) {
    if (section_element[i].style.display === 'block') {
      section_element[i].style.display = 'none'
    }
  }
  var b = document.getElementById('blue2')
  if (b.style.display == 'none') {
    b.style.display = 'block'
  }
  var b1 = document.getElementById('blue')
  b1.style.display = 'none'
  var b2 = document.getElementById('blue1')
  b2.style.display = 'none'
}
/**
 * @desc when the icon snowy is cliked this function is executed
 */
function myFunction3() {
  const city_element_card = document.querySelectorAll('.text-1')
  const temp_element_card = document.querySelectorAll('.text')
  const section_element = document.querySelectorAll('.sec1')
  const time_element_card = document.querySelectorAll('.time-10')
  const date_element_card = document.querySelectorAll('.date-a1')
  const card_icon = document.querySelectorAll('.ic')
  const humidity_element_card = document.querySelectorAll('.hum')
  const precipitation_element_card = document.querySelectorAll('.precip-1')
  var spinner_val = parseInt(document.getElementById('quantity').value)
  var length = snowy.length
  if (spinner_val != NaN && spinner_val < length) {
    length = spinner_val
  }
  for (var i = 0; i < length; i++) {
    section_element[i].style.display = 'block'
    city_element_card[i].innerHTML = snowy[i]
    temp_element_card[i].innerHTML = snowy_temp[i]
    time_element_card[i].innerHTML = snowy_time[i]
    card_icon[i].style.background = 'url(./././assets/img/snowflakeIcon.svg)'
    card_icon[i].style.backgroundRepeat = 'no-repeat'
    card_icon[i].style.backgroundPosition = 'center'
    card_icon[i].style.backgroundSize = '20px'
    date_element_card[i].innerHTML = snowy_date[i]
    humidity_element_card[i].innerHTML = snowy_humidity[i]
    precipitation_element_card[i].innerHTML = snowy_precip[i]
    section_element[i].style.background ='url(./././assets/img/' + snowy[i] + '.svg)'
    section_element[i].style.backgroundSize = '50%'
    section_element[i].style.backgroundColor = ' #2e2e2e'
    section_element[i].style.backgroundRepeat = 'no-repeat'
    section_element[i].style.backgroundPosition = 'bottom right'
  }
  for (var i = length; i < 14; i++) {
    if (section_element[i].style.display === 'block') {
      section_element[i].style.display = 'none'
    }
  }
  var b = document.getElementById('blue1')
  if (b.style.display == 'none') {
    b.style.display = 'block'
  }
  var b1 = document.getElementById('blue')
  b1.style.display = 'none'
  var b2 = document.getElementById('blue2')
  b2.style.display = 'none'
}
/**
 * @desc when the icon snowy is cliked this function is executed
 */
function spin() {
  var spinner_val = document.getElementById('quantity').value
  var spin_val = parseInt(spinner_val)
  const section_element = document.querySelectorAll('.sec1')
  var i = 0
  var snow = document.getElementById('blue1').style['display']
  var hot = document.getElementById('blue').style['display']
  var wind = document.getElementById('blue2').style['display']
  if (snow == 'block' && spin_val > snowy.length) {
    spin_val = snowy.length
  } 
  else if (hot == 'block' && spin_val > sunny.length) {
    spin_val = sunny.length
  } 
  else if (wind == 'block' && spin_val > windy.length) {
    spin_val = windy.length
  }
  for (i = 0; i < spin_val; i++) {
    section_element[i].style.display = 'block'
  }
  for (var j = i; j < 14; j++) {
    if (section_element[j].style.display === 'block') {
      section_element[j].style.display = 'none'
    }
  }
}
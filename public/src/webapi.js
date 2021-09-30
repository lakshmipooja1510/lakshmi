import { top } from './top.js'
export let parsedData = {}
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
}
fetch('http://localhost:8000/all-timezone-cities', requestOptions)
    .then((response) => response.json())
    .then((result) => {
        for (var i in result) {
            result[i].nextFiveHrs = ['18', '10', '20', '15']
            parsedData[i] = result[i]
        }
    })
    .then(() => {
        top()
    })
    .catch((error) => console.log('error', error))

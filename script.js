let searchInp = document.getElementById('searchInp');
// let searchBtn = document.getElementById('searchBtn');
let mainDiv = document.getElementById('main')



async function getWeather() {
    try {
        let city = searchInp.value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70ef2006dc36b48a5025941a049a5e97`
    let response = await fetch(API);
     let data = await response.json();
     showWeather(data)
         
    } catch(err){
        console.log("err:",err)
     }
    
}

function showWeather(weather) {
    let tempCelsius = (weather.main.temp - 32) * 5 / 9
     console.log(tempCelsius)
     mainDiv.innerHTML = `<h1>Temperature- ${tempCelsius}</h1>`
}
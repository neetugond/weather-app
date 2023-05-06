let searchInp = document.getElementById('searchInp');
// let searchBtn = document.getElementById('searchBtn');
let mainDiv = document.getElementById('main')



async function getWeather() {
    try {
        let city = searchInp.value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70ef2006dc36b48a5025941a049a5e97&units=metric&lang=hi`
    let response = await fetch(API);
        let data = await response.json();
        console.log(data)
     showWeather(data)
         
    } catch(err){
        console.log("err:",err)
     }
    
}
function showWeather(weather) {
    let name = document.createElement('p');
    name.innerText = `Temp- ${weather.name}`
    let temp = document.createElement('p');
    temp.innerText = `Temp- ${weather.main.temp}`
    let pressure = document.createElement('p');
    pressure.innerText = `Pressure - ${weather.main.pressure}`
    let humidity = document.createElement('p');
    humidity.innerText = `Humidity - ${weather.main.humidity}`
    mainDiv.append(name, temp, pressure, humidity);


}
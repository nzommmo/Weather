const apiKey ="dbc272403579fc4e89198fa1b3317c2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.getElementById("town")
const weathericon= document.createElement('img')
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    
    document.getElementById("name").innerHTML=data.name
    document.getElementById("temp").innerHTML=Math.round(data.main.temp) + "℃"
    document.getElementById("humidity").innerHTML="Humidity:" + data.main.humidity + "%"
    document.getElementById("wind").innerHTML="WindSpeed:"+data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds"){
        weathericon.src="images/cloud.png"
        weathericon.style.width="100px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear-sky.png"
        weathericon.style.width="50px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rainy.png"
        weathericon.style.width="50px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png"
        weathericon.style.width="50px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
        weathericon.style.width="50px"
        document.getElementById("container").appendChild(weathericon)
    }

}

search.addEventListener("click",(e)=>{
    e.preventDefault()
    checkWeather(searchbox.value)
})

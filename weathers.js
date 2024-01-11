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
        weathericon.style.width="100px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rainy.png"
        weathericon.style.width="100px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png"
        weathericon.style.width="100px"
        document.getElementById("container").appendChild(weathericon)
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png"
        weathericon.style.width="100px"
        document.getElementById("container").appendChild(weathericon)
    }

}
search.addEventListener("click",(e)=>{
    e.preventDefault()
    checkWeather(searchbox.value)
})

if (navigator.geolocation){
  navigator.geolocation.watchPosition(check)
}
 function check(position) {
  const latitude = Math.floor(position.coords.latitude);
  const longitude = Math.round(position.coords.longitude);
  
  const APIURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  fetch(APIURL)
  .then(response=> response.json())
  .then(data => {
    const city =data.name
  })

  const weathericon1= document.createElement('img')
  const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  async function showWeather(){
    const response = await fetch(api_url + `&appid=${apiKey}`)
    var data = await response.json()
    
    document.getElementById("name1").innerHTML=data.name
    document.getElementById("temp1").innerHTML=Math.round(data.main.temp) + "℃"
    document.getElementById("humidity1").innerHTML="Humidity:" + data.main.humidity + "%"
    document.getElementById("wind1").innerHTML="WindSpeed:"+data.wind.speed + "km/h"

    if(data.weather[0].main == "Clouds"){
      weathericon1.src="images/cloud.png"
      weathericon1.style.width="100px"
      document.getElementById("container1").appendChild(weathericon1)
  }else if(data.weather[0].main == "Clear"){
      weathericon1.src = "images/clear-sky.png"
      weathericon1.style.width="100px"
      document.getElementById("container1").appendChild(weathericon1)
  }else if(data.weather[0].main == "Rain"){
      weathericon1.src = "images/rainy.png"
      weathericon1.style.width="100px"
      document.getElementById("container1").appendChild(weathericon1)
  }else if(data.weather[0].main == "Drizzle"){
      weathericon1.src = "images/drizzle.png"
      weathericon1.style.width="100px"
      document.getElementById("container1").appendChild(weathericon1)
  }else if(data.weather[0].main == "Mist"){
      weathericon1.src = "images/mist.png"
      weathericon1.style.width="100px"
      document.getElementById("container1").appendChild(weathericon1)
  }

  }
  showWeather()
 
  setTimeout(showWeather,1000)
  
 

 }
 check()
 
 

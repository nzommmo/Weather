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


const api_key = "cce21f82aa764cea87d2ccfeadecd5ec";
const api_url ='https://api.opencagedata.com/geocode/v1/json';
var latitude = '52.3877830';
var longitude = '9.7334394';
var query = latitude + ',' + longitude;
var request_url = api_url
+ '?'
+ 'key=' + api_key
+ '&q=' + encodeURIComponent(query)
+ '&pretty=1'
+ '&no_annotations=1';

var request = new XMLHttpRequest();
request.open('GET', request_url, true);

request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){
      // Success!
      var data = JSON.parse(request.responseText);
      document.getElementById("demo").textContent=(data.results[0].components.city); // print the location

    } else if (request.status <= 500){
      // We reached our target server, but it returned an error

      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");
  };

  request.send();  // make the request




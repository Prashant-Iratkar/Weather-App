//---API's for weather information take from openweathermap ---//
const apikey = "9d087658901b4ff13e529a0771a2c344";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//----take input from user---//
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");

//---function for take specific city information from URL---//
async function checkweather(city){
    const responce = await fetch(apiUrl + city + `&appid=${apikey}`);

//---function if user fill wrong city then give error---
    if(responce.status ==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    //---for taking the data from json file with the help of URL and manipulet the html dynamically--//
        var data = await responce.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
    //-----access images dynamically according to weather condtion given by url data---//
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    //----to hide the defaut text on the app---//
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
}

//---event listener for action on search icon---//
searchBtn,addEventListener("click",()=>{
    checkweather(searchBox.value)
})


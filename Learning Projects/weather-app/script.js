/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData =  (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE

  base_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`

  let weatherdata={city:null,temp:null,mintemp:null,maxtemp:null,weather:null};

  //return the promise that you get from fetch()
  return fetch(base_url)
    .then(response => response.json())
  .then(json => json)

}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  
  // CODE GOES HERE

  // getWeatherData(city).then(value => {
  //   console.log(value);
  // });

  let weatherdata = {city:null,temp:null,maxtemp:null,mintemp:null,weather:null};

  const json = await getWeatherData(city);  //here json is the promise
  // console.log(weatherdata);


    const temp = json.main.temp;
    const maxtemp = json.main.temp_max;
    const mintemp = json.main.temp_min;
    const name = json.name;
    const weather = json.weather[0].main;

    // console.log(temp);
    // console.log(maxtemp);
    // console.log(mintemp);
    // console.log(name);
    // console.log(weather);
  

    weatherdata.temp=temp;
    weatherdata.maxtemp=maxtemp;
    weatherdata.mintemp=mintemp;
    weatherdata.city=name;
    weatherdata.weather=weather;
  
    console.log(weatherdata);

  showWeatherData(weatherdata);

  
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE

  const cityname = document.getElementById('city-name');
  const weathertype = document.getElementById('weather-type');
  const temp = document.getElementById('temp');
  const mintemp = document.getElementById('min-temp');
  const maxtemp = document.getElementById('max-temp');

  cityname.innerText = weatherData.city;
  weathertype.innerText = weatherData.weather;
  temp.innerText = weatherData.temp;
  mintemp.innerText = weatherData.mintemp;
  maxtemp.innerText = weatherData.maxtemp;

  
}


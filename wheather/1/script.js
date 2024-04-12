function getval() {
  let c= document.getElementById('cityname').value
if (c==='') {
   document.getElementById('wheatherfor').innerHTML="Please Enter a city to show weather"
  
} else {
   var city_name = document.getElementById('cityname').value // Try edit me
  console.log(city_name) 
   var p= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=43e83ce54df83e766853d63116509a55&units=metric`)
  
    document.getElementById('temp1').innerHTML= "Temperature:"
    document.getElementById('humidity1').innerHTML= "Humidity:"
    document.getElementById('wind1').innerHTML= "Wind:"
    document.getElementById('desc1').innerHTML= "Description:"

  /* var p = fetch("https://goweather.herokuapp.com/weather/{msg}")*/
  p.then((value)=>{
    return value.json()
  }).then((value1)=>{
    document.getElementById('temp').innerHTML= value1.main.temp + "deg"
    document.getElementById('humidity').innerHTML= value1.main.humidity +"%"
    document.getElementById('wind').innerHTML= value1.wind.speed +"mph"
    document.getElementById('desc').innerHTML= value1.weather[0].description
    let des = value1.weather[0].description
    if(des==='Clear sky'){
      document.getElementById('desc2').src="./cloudy.png"
      console.log("success")
    }
    console.log(value1.main.temp)
    console.log(value1.main.humidity)
    console.log(value1.wind.speed)
    console.log(value1.weather[0].description)})
  }
}
 
  input=document.getElementById("cityname")
  input.addEventListener("keypress",function(event) {
    if(event.key === "Enter"){
      //event.preventDefault();
      document.getElementById('btn').click();
    } 
  });
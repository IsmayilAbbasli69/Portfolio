import React,{useEffect,useState} from 'react'
const API = () => {
const [weather,setWeather]=useState({city:'',country:'',temperature:'',text:'',icon:''})
const [city,setCity]=useState('')
useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=a1fe760249734fd5a22234042231701&q=${city} `)
	.then(response => response.json())
	.then(response => setWeather({
   city:response.location.name,
   country:response.location.country,
   temperature:response.current.temp_c,
   text:response.current.condition.text,
    icon:response.current.condition.icon
  }) ) 
  //current-condition-code
	.catch(err => console.error(err));

}, [city])

  return (
   
    city?<div id='api_navbar'>
<input type="text" id='api_input' placeholder="Enter city name...." 
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

 <div id='location'>{weather.city},{weather.country}</div>
<div id='temperature'>{weather.temperature}C&#176;</div>
<div id="text">{weather.text} <img src={weather.icon}/> </div>
    </div>:<div id='api_navbar'>
<input type="text" id='api_input' placeholder="Enter a city...." 
value={city}
onChange={(e)=>setCity((e.target.value).toUpperCase())}
/>
</div>
  )
}

export default API

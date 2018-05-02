var APPID = "67dc6405b19f52c783ba5d39c42c9bb3";
var temperature;
var icon;
var place;
var humidity;
var wind;
var description;
var country;
var result;
var cel;

function updateByName(name){
	var url ="http://api.openweathermap.org/data/2.5/weather?"+
	"q=" + name +
	"&APPID=" + APPID;
	sendRequest(url);
}

function updateByGeo(lat, lon){
	var url ="http://api.openweathermap.org/data/2.5/weather?"+
	         "lat=" + lat +
	         "&lon=" + lon +
	         "&APPID=" + APPID;
	 sendRequest(url);
}

function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			weather.icon = data.weather[0].id;
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.deg;
			weather.place = data.name;
			weather.country = data.sys.country;
			weather.description = data.weather[0].description;
			weather.temp = K2F(data.main.temp);
			update(weather);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function K2F(k){
	result=Math.round(k*(9/5)-459.67);
	return result;
}

function f2c(){
	cel = (result-32)/1.8;
	document.getElementById("temperature").innerHTML = parseFloat(cel).toFixed(2);
	document.getElementById("change").innerHTML = "C";
}

function c2f(){
	var fah;
	fah = ((cel* 9) / 5) + 32;
	if(isNaN(fah)){
	   document.getElementById("temperature").innerHTML  = result;
	}else{
		document.getElementById("temperature").innerHTML = Math.round(fah);
		document.getElementById("change").innerHTML = "F";
	}
}

function update(weather){
	wind.innerHTML = weather.wind;
	humidity.innerHTML = weather.humidity;
	place.innerHTML = weather.place;
	temp.innerHTML = weather.temp;
	description.innerHTML = weather.description;
	country.innerHTML = weather.country;
	icon.src= "imgs/codes/" + weather.icon + ".png";
	console.log(icon.src);
}

window.onload = function(){
	temp=document.getElementById("temperature");
	description=document.getElementById("description");
	icon = document.getElementById("icon");
	place = document.getElementById("place");
	country = document.getElementById("country");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");

	if(navigator.geolocation){
		var showPosition = function(position){
			updateByGeo(position.coords.latitude, position.coords.longitude);
		}
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else{
		var name = window.prompt("Could not discover your location. Where is your country?");
		updateByName(name);
	}
}


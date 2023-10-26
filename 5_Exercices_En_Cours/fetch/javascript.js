// const adresse = 'https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9'
// const meteo = fetch(adresse).then(async response =>{
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
//     console.log(json.name);
// });

// const ville = 'https://api.openweathermap.org/data/2.5/weather?q=albi&appid=6f88826d767f323ad19cd282444924e9'
// const meteo = fetch(ville).then(async response =>{
//     console.log(response);
//     const json = await response.json();
//     console.log(json);
    
// });

// exo 23 fetch et dom

const nom = document.getElementById('nom')
const temps = document.getElementById('temps')
const temperature = document.getElementById('temperature')

  const ville = 'https://api.openweathermap.org/data/2.5/weather?q=toulouse&appid=6f88826d767f323ad19cd282444924e9'
 const meteo = fetch(ville).then(async response =>{
    console.log(response);
     const json = await response.json();
     console.log(json.name);
     console.log((json.main.temp)-273);
     console.log(json.weather.main)
    console.log(json);
 
const img =document.querySelector('#img')
 })
bt.addEventListener('click', ()=>{
    const meteo = fetch(ville).then(async response =>{
    console.log(response);
    const json = await response.json();
    console.log(json.weather.main);
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=ville&appid=6f88826d767f323ad19cd282444924e9'
console.log(img);
    })
})

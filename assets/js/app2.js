const send = document.querySelector('#send');
const clima = document.querySelector('#clima');

send.addEventListener('click', queryWather);

function queryWather (e){
    e.preventDefault();
    const city = document.querySelector('#city').value; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8684198c2eb23343d85874dac76f1006&units=metric`  

    const weather = fetch (url)
                        .then(res => res.json())
                        .then(data => showIntoDOM(data))
}

function showIntoDOM(data){
    clearHTML()
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const { main:{temp,humidity}, weather:[{description}]} = data;

    /* Creacion de section para infrormacion html */
    const city = document.querySelector('#city').value;
    const celsius = document.createElement('p');
    const icono = document.createElement('img');
    const humedad = document.createElement('h3');
    const ciudad = document.createElement('h2');
    const estado = document.createElement('h4');

    /* llamado de las variables creadas */
    icono.src = iconUrl;
    ciudad.textContent = `${city}`    
    celsius.textContent = `${Math.ceil(temp)}°C`
    humedad.textContent = `Humedad ${humidity} %`
    estado.textContent = `${description}`

    /* ubicacion de las variables HTML e integracion */
    clima.appendChild(celsius)
    clima.appendChild(ciudad)
    clima.appendChild(humedad)
    clima.appendChild(icono)  
    clima.appendChild(estado)

}

function clearHTML(){
    clima.innerHTML = '';
}


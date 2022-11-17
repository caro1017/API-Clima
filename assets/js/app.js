/* Consumir API */
const usuarios = document.querySelector('#usuarios')

//fetch (poner la url que vamos a consultar)
const url = 'https://jsonplaceholder.typicode.com/users'
const query = fetch(url) //1. Consulto con fetch la api
                    .then(response => response.json()) //return implicito 
                    // 2. Eentonces combiertamelo en un json 
                    .then(data => mostrarDOM(data)) 
                    // 3. Entonces mostrar en consola 

/* console.log(query); */

function mostrarDOM(data){
    console.log(data);
    data.forEach(element => {
        console.log(element.name);
    });
}


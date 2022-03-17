
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//Codigo realizado con XML, no con fetch, porque fecth ocupa promesas

//función que le da vida para llamar a la api
const fetchData = (url_api) => {
    return new Promise((resolve, reject)=>{

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); //Asinctonismo en XML
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                //Operacion ternaria
                (xhttp.status === 200) 
                ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error', url_api));
            }
        })
        xhttp.send();
    });


}

module.exports = fetchData;



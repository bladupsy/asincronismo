
let XMLHttpRequest = request('xmlhttprequest').XMLHttpRequest;

//Codigo realizado con XML, no con fetch, porque fecth ocupa promesas

//función que le da vida para llamar a la api
function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true); //Asinctonismo en XML
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error', + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}
let resultado, titleName, firstName, lastName;

function llamarAPI(){
    fetch("https://randomuser.me/api/")
    .then(function cogerRespuesta(respuesta){
        return respuesta.json();
    }).then(function cogerData(data){
        resultado = data.results; 
        res_informacion = data.info;  
        titleName = resultado[0].name.title;
        firstName = resultado[0].name.first;
        lastName = resultado[0].name.last;
        locationxd = resultado[0].location.street.name;
        daCity = resultado[0].location.city;
        informasion = res_informacion.seed;

        photo = resultado[0].picture.large;
        print();
    }
)}


function print(){
    document.getElementById("print").innerHTML += 
    `<div id="persona">
    <img src="${photo}" alt="foto">
    <h1>${locationxd}</h1> 
    <h1>${titleName}</h1> 
    <h2>${firstName}</h2>
    <h2>${lastName}</h2> 
    <h2>${daCity}</h2> 
    <h2>${informasion}</h2> 
    </div>
    `
}
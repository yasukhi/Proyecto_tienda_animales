$(document).ready(function() {
  $("#Miformulario").submit(function(event){

    var Clave = document.getElementById("clave1").value;
    var Clave1 = document.getElementById("clave1").value;
    var Clave2 = document.getElementById("clave2").value;

    console.log(Clave);
    console.log(Clave1);
    console.log(Clave2);


    if(Clave1 != Clave2){
        event.preventDefault();
        alert("Las claves deben ser iguales");

    }else{
        event.returnValue = false;
    }

    if(Clave.length<8){
        event.preventDefault();
        alert("La clave debe ser de minimo 8 digitos");

    }else{
        event.returnValue = false;
    }


    if ( Clave.match(/[A-Z]/gi)) {
        event.returnValue = false;

    }else{
        
        event.preventDefault();
        alert("La clave debe tener al menos una mayuscula");
    }

    if ( Clave.match(/\d]/gi)) {
        event.preventDefault();
        alert("La clave debe poseer un numero como minimo");
        

    }else{
        event.returnValue = false;
    }

})});
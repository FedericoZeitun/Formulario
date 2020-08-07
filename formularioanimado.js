let input = document.getElementsByClassName("input_formulario")
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("keyup", function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar")
        }
    })
}

let validar = function() {
    var nombre, apellido, email, telefono, expresion_email;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    expresion_email = /\w+@\w+\.+[a-z]/;
    if(nombre === "A" || apellido === "" || email === "" || telefono === ""){
        alert("Todos los campos son obligatorios")
        return false
    }
    else if(nombre.length > 40){
        alert("El nombre es muy largo");
        return false
    }
    else if(apellido.length > 30){
        alert("El apellido es muy largo");
        return false
    }
    else if(email.length > 40){
        alert("El email es muy largo");
        return false
    }
    else if (!expresion_email.test(email)){
        alert("El mail no es válido")
        return false
    }
    else if(telefono.length > 13 ){
        alert("El telefono es muy largo");
        return false
    }
    else if (isNaN(telefono)){
        alert("El teléfono ingresado no es un número")
    }
}

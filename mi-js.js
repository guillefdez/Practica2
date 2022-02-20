function enviaForm() {
    let nombre = document.querySelector('#nombre').value; 
    let apellido = document.querySelector('#apellido').value;
    let telefono = document.querySelector('#telefono').value;
    let asunto = document.querySelector('#asunto').value;
    let mensaje = document.querySelector('#mensaje').value;
    let nombre_contacto = document.querySelector('#nombre_contacto');
    nombre_contacto.innerHTML = 'Tu Nombre es: ' + nombre; 
    let apellido_contacto = document.querySelector('#apellido_contacto');
    apellido_contacto.innerHTML= 'Tu Apellido es: ' + apellido;
    let telefono_contacto = document.querySelector('#telefono_contacto');
    telefono_contacto.innerHTML= 'Tu Telefono es: ' + telefono;
    let asunto_contacto = document.querySelector('#asunto_contacto');
    asunto_contacto.innerHTML= 'Tu Asunto es: ' + asunto;
    let mensaje_contacto = document.querySelector('#mensaje_contacto');
    mensaje_contacto.innerHTML= 'Tu Mensaje es: ' + mensaje;
    let cuadro = document.querySelector('#resultados_contacto');
    cuadro.style.display = "block";
    return false;
}
function cerrar() {
    let cuadro = document.querySelector('#resultados_contacto');
    cuadro.style.display = "none";
}
let abre_menu = document.querySelector('#cierra');
abre_menu.addEventListener("click", abrir_menu);
var contador='cerrado';
function abrir_menu() {
    let menu = document.querySelector('nav');
    if(contador == 'cerrado'){
        menu.style.right = "0";
        contador = 'abierto';
    }else{
        menu.style.right = "-250px";
        contador = 'cerrado';
    }
}


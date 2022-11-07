let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
    usuario = usuarioStorage;
    let alerta = `Bienvenido ${usuario}`;
    alert(alerta);
}else{
    usuario = prompt("ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
}

let nota1 = parseInt(prompt("Valore con un número del 1 al 10 nuestro estilo de página"));
let nota2 = parseInt(prompt("Valore con un número del 1 al 10 nuestra calidad de productos"));
let nota3 = parseInt(prompt("Valore con un número del 1 al 10 nuestra atención hacia usted"));

let notaFinal = (nota1+nota2+nota3)/3; 

{if(notaFinal <= 5)
    alert("Dínos en qué nos equivocamos para mejorar nuestra página!! ")
}
{if(notaFinal > 5)
    alert("Muchas gracias por valorar positivamente a nuestra página!!")
}

const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) =>`<li>${user.name} ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    })

Swal.fire({
    icon: 'question',
    title: 'Quiere saber quienes son nuestros empleados',
    footer: '<a href="/pages/empleados.html">Presione aquí</a>'
})
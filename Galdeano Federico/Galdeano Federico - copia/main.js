
// Funcionamiento del toggleBtn

const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('active');
})



//Funcionamiento del sidebar

function refrescarPagina() {
    location.reload();
}


// function showIni() {
//     document.getElementById('ini').style.display = 'block';
//     document.getElementById('usu').style.display = 'none';
//     document.getElementById('pok').style.display = 'none';
// }

function showUsu() {
    document.getElementById('ini').style.display = 'none';
    document.getElementById('usu').style.display = 'block';
    document.getElementById('pok').style.display = 'none';
}

function showPok() {
    document.getElementById('ini').style.display = 'none';
    document.getElementById('usu').style.display = 'none';
    document.getElementById('pok').style.display = 'block';
}

function clearScrean() {
    document.getElementById('ini').style.display = 'none';
    document.getElementById('usu').style.display = 'none';
    document.getElementById('pok').style.display = 'none';
}

// Frases random

function frasesRandom(){

    var frases=new Array();
    frases[0]="<p id='f0'><b>Tu actitud, no tu aptitud, determinará tu altitud.</b></p>"
    frases[1]="<p id='f1'><b>Si el plan no funciona, cambia el plan no cambies la meta.</b></p>"
    frases[2]="<p id='f2'><b>La mejor forma de predecir el futuro es creandolo.</b></p>"
  
    var ind=(Math.floor(Math.random() * (3)));
    return frases[ind];
}
  
  quote = document.getElementById('quote');
  quote.innerHTML = frasesRandom();

// API usuarios



const aplicacion = document.querySelector('.container');

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(usuario => {
            const p = document.createElement('p')
            p.innerHTML = `${usuario.name} - Mail:${usuario.email} - Telefono:${usuario.phone}`
            aplicacion.appendChild(p)
        });
    })
    .catch(err => console.log(err))
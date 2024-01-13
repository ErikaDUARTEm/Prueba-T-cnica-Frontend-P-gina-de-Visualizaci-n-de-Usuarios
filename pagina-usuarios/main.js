import './style.css'
import { tarjetas } from './cards'
import { reqApi } from './reqApi'
// Capturamos en elemento del Dom donde vamos a renderizar nuestros usuarios
const app = document.querySelector('#app')
const URL = 'https://randomuser.me/api/?results=200'

// header con buscador
const header = document.createElement('header')
const contenedor = document.createElement('div')
contenedor.classList.add('contenedorSearch')
// label
const label = document.createElement('label')
label.setAttribute('for', 'search')
label.classList.add('label')
// input
const input = document.createElement('input')
input.setAttribute('id', 'input')
input.classList.add('input')
input.setAttribute('placeholder', 'Introduce el nombre del usuario')
// button
const buttonSearch = document.createElement('button')
buttonSearch.setAttribute('id', 'search')
buttonSearch.setAttribute('value', 'search')
buttonSearch.classList.add('buttonSearch')
buttonSearch.textContent = 'Buscar'
// Se agregan al DOM
label.appendChild(input)
label.appendChild(buttonSearch)
contenedor.appendChild(label)
header.appendChild(contenedor)

app.appendChild(header)


const buscador = document.querySelector('.input')
const button = document.querySelector('.buttonSearch')
// Section donde va el listado de usuarios
const sectionLista = document.createElement('section')
sectionLista.classList.add('sectionListado')
app.appendChild(sectionLista)
// Section que mostrara el modal
const contenedorModal = document.createElement('section')
contenedorModal.classList.add('modal-content')
app.appendChild(contenedorModal)
const section = document.querySelector('.sectionListado')

window.addEventListener('load', function (event) {
  if (event) {
    reqApi(URL, section, tarjetas, buscador, contenedorModal)
  }
})

// evento del boton buscar
button.addEventListener('click', () => {
  if (buscador.value.includes(' ')) {
    buscador.value = buscador.value.replace(/\s/g, '')
  }
  reqApi(URL, section, tarjetas, buscador, contenedorModal)
})

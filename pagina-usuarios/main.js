import './style.css'
import { tarjetas } from './cards'
import { reqApi } from './reqApi'
// Capturamos en elemento del Dom donde vamos a renderizar nuestros usuarios
const app = document.querySelector('#app')
const URL = 'https://randomuser.me/api/?results=100'
// header con buscador
const header = document.createElement('header')
const contenedor = document.createElement('div')
contenedor.classList.add('contenedorSearch')
const label = document.createElement('label')
label.setAttribute('for', 'search')
label.classList.add('label')

const input = document.createElement('input')
input.setAttribute('id', 'search')
input.classList.add('input')

input.setAttribute('placeholder', 'Introduce el nombre del usuario')
const buttonSearch = document.createElement('button')
buttonSearch.setAttribute('id', 'search')
buttonSearch.classList.add('buttonSearch')
buttonSearch.textContent = 'Buscar'
label.appendChild(input)
label.appendChild(buttonSearch)
contenedor.appendChild(label)
header.appendChild(contenedor)

app.appendChild(header)
const search = document.querySelector('.search')
// Section donde va el listado de usuarios
const sectionLista = document.createElement('section')
sectionLista.classList.add('sectionListado')
app.appendChild(sectionLista)

const section = document.querySelector('.sectionListado')

reqApi(URL, section, tarjetas)

search.addEventListener('')

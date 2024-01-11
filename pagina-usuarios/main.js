import './style.css'
import { tarjetas } from './cards'
// Capturamos en elemento del Dom donde vamos a renderizar nuestros usuarios
const app = document.querySelector('#app')
// Section donde va el listado de usuarios
const sectionLista = document.createElement('section')
sectionLista.classList.add('sectionListado')
app.appendChild(sectionLista)

const section = document.querySelector('.sectionListado')
// Hacemos la petición a la Api
const reqApi = async () => {
  try {
    const api = await fetch('https://randomuser.me/api/?results=100')
    const characterApi = await api.json()
    console.log(characterApi.results)
    characterApi.results.forEach((usuario) => {
      section.insertAdjacentHTML('beforeend', tarjetas(usuario))
    })
  } catch (error) {
    console.error('Ha ocurrido un error con la Api')
  }
}

reqApi()

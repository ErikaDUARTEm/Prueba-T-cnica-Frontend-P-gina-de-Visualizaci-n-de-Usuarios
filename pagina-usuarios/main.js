import './style.css'
import { tarjetas } from './cards'
const app = document.querySelector('#app')
const sectionLista = document.createElement('section')
app.appendChild(sectionLista)



const reqApi = async() => {
  const api = await fetch('https://randomuser.me/api/?results=100')
  const characterApi = await api.json()
  console.log(characterApi.results)
  characterApi.results.forEach((usuario)=>{
     app.insertAdjacentHTML("beforeend", tarjetas(usuario))
  });
}

reqApi()
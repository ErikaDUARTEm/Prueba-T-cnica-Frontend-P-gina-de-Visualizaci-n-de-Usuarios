import './style.css'

const app = document.querySelector('#app')
const sectionLista = document.createElement('section')
app.appendChild(sectionLista)

const tarjetas = (usuario) => {
  const card = `
  <article class="card">
  <div class="card-imagen">
    <img src="${usuario.picture.thumbnail}">
  </div>
  <div class="card-body-title">
    <p>${usuario.name.title}${usuario.name.first}${usuario.last}</p>
  </div>
  </article>`
  return (card)
}

const reqApi = async() => {
  const api = await fetch('https://randomuser.me/api/?results=100')
  const characterApi = await api.json()
  console.log(characterApi.results)
  characterApi.results.forEach((usuario)=>{
     app.insertAdjacentHTML("beforeend", tarjetas(usuario))
  });
}

reqApi()
import { citaAleatoria } from './citaAleatoria'
export const modal = (usuario) => {
  const fecha = new Date(usuario.dob.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const fechaFormateada = fecha.toLocaleDateString('es-ES', options)
  const modal = `
    <article class="modal close">
    
        <div class="modal-imagen">
            <img src="${usuario.picture.thumbnail}">
            <button class="btnCerrar">x</button>
        </div>
        <div class="modal-body-title">
            <div>
                <p>Nombre completo: <span class="contenido">${usuario.name.title}. ${usuario.name.first} ${usuario.name.last}</span></p>
                <p>Edad: <span class="contenido">${usuario.dob.age}</span></p>
                <p>Dirección: <span class="contenido">${usuario.location.city}</span></p>
            </div>
            <div>
                <p>Género: <span class="contenido">${usuario.gender}</span></p>
                <p>Fecha de nacimiento: <span class="contenido">${fechaFormateada}</span></p>
                <p>Email: <span class="contenido">${usuario.email}</span></p>
            </div>
            <div>
                <p>Id: <span class="contenido">${usuario.id.name}${usuario.id.value}</span></p>
                <p>Username: <span class="contenido">${usuario.login.username}</span></p>
                <p>Phone: <span class="contenido">${usuario.phone}</span></p>
            </div>
            <span>${citaAleatoria()}</span>
            <span style="z-index:50;font-size:0.9em; font-weight: bold;">
                <img src="https://theysaidso.com/branding/theysaidso.png" height="20" width="20" alt="theysaidso.com"/>
                <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style="color: #ccc; margin-left: 4px; vertical-align: middle;">
        They Said So®</a>
            </span>
        </div> 
       
</article>`
  return modal
}

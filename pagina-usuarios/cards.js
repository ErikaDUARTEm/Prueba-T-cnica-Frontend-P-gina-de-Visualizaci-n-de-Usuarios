export const tarjetas = (usuario) => {
  const fecha = new Date(usuario.dob.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const fechaFormateada = fecha.toLocaleDateString('es-ES', options)
  const card = `
    <article class="card">
    <div class="card-imagen">
      <img src="${usuario.picture.medium}">
      <button class="btnCerrar btnOculto">x</button>
    </div>
    <div class="card-body-title">
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
    </div>
    <div class="container-btnInfo">
          <button class="btnInfo">+</button>
    </div>      
    </article>`
  return (card)
}

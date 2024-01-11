export const tarjetas = (usuario) => {
  const fecha = new Date(usuario.dob.date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const fechaFormateada = fecha.toLocaleDateString('es-ES', options)
  const card = `
    <article class="card">
    <div class="card-imagen">
      <img src="${usuario.picture.thumbnail}">
    </div>
    <div class="card-body-title">
      <p>${usuario.name.title}${usuario.name.first}${usuario.last}</p>
      <p>${usuario.gender}</p>
      <p>${fechaFormateada}</p>
      <p>${usuario.location.city}</p>
      <p>${usuario.email}</p>
    </div>
    </article>`
  return (card)
}

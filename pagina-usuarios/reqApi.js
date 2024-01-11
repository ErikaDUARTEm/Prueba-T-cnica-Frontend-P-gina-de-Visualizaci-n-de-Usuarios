// Hacemos la petición a la Api
export const reqApi = async (url, section, tarjetas) => {
  try {
    const api = await fetch(url)
    const characterApi = await api.json()
    console.log(characterApi.results)
    characterApi.results.forEach((usuario) => {
      section.insertAdjacentHTML('beforeend', tarjetas(usuario))
    })
  } catch (error) {
    console.error('Ha ocurrido un error con la Api')
  }
}

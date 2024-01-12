// Hacemos la petición a la Api
let resultadosOriginales = []
export const reqApi = async (url, section, tarjetas, buscador) => {
  try {
    if (resultadosOriginales.length === 0) {
      const api = await fetch(url)
      const characterApi = await api.json()
      resultadosOriginales = characterApi.results
    }

    resultadosOriginales.forEach((usuario) => section.insertAdjacentHTML('beforeend', tarjetas(usuario)))

    const match = resultadosOriginales.filter(result => result.name.first.toLowerCase() === buscador.toLowerCase());

    if (match.length > 0) {
      console.log(match)
      section.innerHTML = ''
      match.forEach(usuario => section.insertAdjacentHTML('beforeend', tarjetas(usuario)))
    } else {
      console.log('No se encontraron resultados para el buscador.')
    }
  } catch (error) {
    console.error('Ha ocurrido un error con la Api')
  }
}

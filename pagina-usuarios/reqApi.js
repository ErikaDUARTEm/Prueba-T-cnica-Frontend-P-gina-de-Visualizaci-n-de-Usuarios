// Hacemos la petición a la Api
let resultadosOriginales = []

export function redireccionarPagina () {
  setTimeout(function () {
    window.location.href = '/'
  }, 5000)
}
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
      section.innerHTML = ''
      match.forEach(usuario => section.insertAdjacentHTML('beforeend', tarjetas(usuario)))
      setTimeout(() => {
        const btnCerrarList = document.querySelectorAll('.btnCerrar')
        btnCerrarList.forEach(btnCerrar => btnCerrar.classList.remove('btnOculto'))
        btnCerrarList.forEach((btn) => redireccionarPagina())
      }, 0)
    } else {
      section.innerHTML = ''
      section.innerHTML = `<h2>No se encontraron resultados para el buscador.</h2>`
      redireccionarPagina()
    }
  } catch (error) {
    console.error('Ha ocurrido un error con la Api')
  }
}

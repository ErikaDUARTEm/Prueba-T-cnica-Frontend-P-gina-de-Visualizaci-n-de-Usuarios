import { modal } from './modal'

// Hacemos la petición a la Api
let resultadosOriginales = []

export function redireccionarPagina (time) {
  setTimeout(function () {
    window.location.href = '/'
  }, time)
}
export const reqApi = async (url, section, tarjetas, buscador, contenedorModal) => {
  try {
    if (resultadosOriginales.length === 0) {
      const api = await fetch(url)
      const characterApi = await api.json()
      resultadosOriginales = characterApi.results
    }

    resultadosOriginales.forEach((usuario, index) => {
      section.insertAdjacentHTML('beforeend', tarjetas(usuario, index + 1))
    })
    const btnInfoList = section.querySelectorAll('.btnInfo')
    btnInfoList.forEach((btn) => {
      btn.addEventListener('click', () => {
        const usuario = resultadosOriginales[parseInt(btn.dataset.id) - 1]
        contenedorModal.innerHTML = modal(usuario)
        const modals = document.querySelector('.modal')
        modals.classList.remove('close')
        modals.classList.add('open')
        if (modal) {
          const cerrarModal = document.querySelectorAll('.btnCerrar')
          cerrarModal.forEach((btn) => btn.addEventListener('click', () => {
            redireccionarPagina(0)
          }))
        }
      })
    })

    const valorInput = buscador.value.toLowerCase()
    if (valorInput !== null && valorInput !== undefined && valorInput.trim() !== '') {
      const match = resultadosOriginales.filter(result => result.name.first.toLowerCase() === valorInput)
      if (match.length > 0) {
        section.innerHTML = ''
        match.forEach(usuario => section.insertAdjacentHTML('beforeend', tarjetas(usuario)))
        const btnCerrarList = document.querySelectorAll('.btnCerrar')
        btnCerrarList.forEach(btnCerrar => btnCerrar.classList.toggle('btnOculto'))
        btnCerrarList.forEach((btn) => btn.addEventListener('click', () => {
          redireccionarPagina(0)
        }))
      } else {
        section.innerHTML = ''
        section.innerHTML = `<h2>No se encontraron resultados para el buscador...<br><br>En unos segundos volverás a la página principal</h2> 
        `
        redireccionarPagina(5000)
      }
    }
  } catch (error) {
    console.error(`Ha ocurrido un error con la Api ${error}`)
  }
}

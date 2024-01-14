import { modal } from './modal'

// En esta variable estarán los datos que devuelva la Api
let resultadosOriginales = []
// función encargada de redireccionar la página
export function redireccionarPagina (time) {
  setTimeout(function () {
    window.location.href = '/'
  }, time)
}
// Hacemos la petición a la Api
export const reqApi = async (
  url,
  section,
  tarjetas,
  buscador,
  contenedorModal
) => {
  const loader = document.querySelector('.loader-container')
  try {
    if (resultadosOriginales.length === 0) {
      loader.style.display = 'flex'
      const api = await fetch(url)
      const characterApi = await api.json()
      resultadosOriginales = characterApi.results
      if (resultadosOriginales.length > 0) {
        loader.style.display = 'none'
      }
    }
    // Se crean las tarjetas con los resultados de la api
    resultadosOriginales.forEach((usuario, index) => {
      section.insertAdjacentHTML('beforeend', tarjetas(usuario, index + 1))
    })

    // Botón + para abrir el modal
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
          cerrarModal.forEach((btn) =>
            btn.addEventListener('click', () => {
              redireccionarPagina(0)
            })
          )
        }
      })
    })
// Validación del input de busqueda
    const valorInput = buscador.value.toLowerCase()
    if (
      valorInput !== null &&
      valorInput !== undefined &&
      valorInput.trim() !== ''
    ) {
      const match = resultadosOriginales.filter(
        (result) => result.name.first.toLowerCase() === valorInput
      )
      // Si hay resultados de busqueda crea la tarjeta con el resultado
      if (match.length > 0) {
        section.innerHTML = ''
        match.forEach((usuario) =>
          section.insertAdjacentHTML('beforeend', tarjetas(usuario))
        )
        const btnCerrarList = document.querySelectorAll('.btnCerrar')
        btnCerrarList.forEach((btnCerrar) =>
          btnCerrar.classList.toggle('btnOculto')
        )
        const containerBton = document.querySelectorAll('.container-btnInfo')
        containerBton.forEach((btnInf) => btnInf.classList.add('btnOculto'))
        btnCerrarList.forEach((btn) =>
          btn.addEventListener('click', () => {
            redireccionarPagina(0)
          })
        )
      } else {
        section.innerHTML = ''
        section.innerHTML = `<h2>No se encontraron resultados para el buscador...<br><br>En unos segundos volverás a la página principal</h2> 
        `
        redireccionarPagina(3000)
      }
    }
  } catch (error) {
    console.error(`Ha ocurrido un error con la Api ${error}`)
  }
}

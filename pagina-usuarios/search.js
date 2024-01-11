export const search = async (url, search) => {
  try {
    const api = await fetch(url)
    const characterApi = await api.json()
    characterApi.results.filter((usuario) => {
      const name = usuario.name.first && usuario.name.last === search
      console.log(name)
      return name
    })
  } catch (error) {
    console.error('Ha ocurrido un error con la Api')
  }
}

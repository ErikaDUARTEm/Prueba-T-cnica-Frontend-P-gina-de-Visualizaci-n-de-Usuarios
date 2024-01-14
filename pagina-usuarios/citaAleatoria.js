export const citaAleatoria = async () => {
  try {
    const apiKey = '3sDUnI0c2sIVepXQgacATS8dz2XiKMXtJvlzPAfV'
    const apiUrl = `https://quotes.rest/quote/random.json?api_key=${apiKey}`

    const cita = await fetch(apiUrl, {
      headers: {
        'X-TheySaidSo-Api-Secret': apiKey,
        Accept: 'application/json'
      }
    })

    const resul = await cita.json()
    console.log(resul)
  } catch (error) {
    console.error('Error al obtener la cita aleatoria:', error)
  }
}

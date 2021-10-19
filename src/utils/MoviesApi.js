const LINK = 'https://api.nomoreparties.co/beatfilm-movies'

//TODO: утилита к стороннему сервису
export const fetchData = async () => {
  try {
    const response = await fetch(LINK)
    const data = await response.json()
    return data
  } catch (e) {
    console.log(`Ошибка в MoviesApi - ${e}`)
  }
}

const LINK = 'https://api.nomoreparties.co/beatfilm-movies'
//TODO: это тестовая утилита вместо статического массива
export const fetchData = async () => {
  try {
    const response = await fetch(LINK)
    const data = await response.json()
    return data.slice(0, 32)
  } catch (e) {
    console.log(`Ошибка - ${e}`)
  }
}

export const fetchDataLiked = async () => {
  try {
    const response = await fetch(LINK)
    const data = await response.json()
    return data.slice(0, 3)
  } catch (e) {
    console.log(`Ошибка - ${e}`)
  }
}

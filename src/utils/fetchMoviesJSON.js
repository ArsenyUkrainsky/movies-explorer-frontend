const LINK = 'https://api.nomoreparties.co/beatfilm-movies'

const fetchData = async () => {
  try {
    const response = await fetch(LINK)
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
  }
}

export default fetchData

const LINK = 'https://api.nomoreparties.co/beatfilm-movies'

/* const fetchMoviesJSON = async () => {
  let response = await fetch(LINK)
  let movies = await response.json()
  return movies
} */

/* const dataJSON = async () => {
  let jsonData = await fetchMoviesJSON()
  return jsonData
} */
const currentloginid = async () => {
  const response = await fetch(LINK)

  const data = await response.json()

  console.log(data)

  return data
}
/////////////////////////////////////////////////////
/* function fetchMoviesJSON() {
  return fetch(LINK).then((res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject('Ошибка', res)
  })
} */

export default currentloginid

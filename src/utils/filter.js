export const filter = (m, text, isShort) => {
  if (isShort) {
    return m.filter((obj) => obj.nameRU.toLowerCase().includes(text.toLowerCase()) && obj.duration <= 40)
  }
  return m.filter((obj) => obj.nameRU.toLowerCase().includes(text.toLowerCase()))
}

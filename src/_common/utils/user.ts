export const setUser = (uuid: string) => {
  localStorage.setItem('peacetol-user', uuid)
}

export const getUser = () => {
  return localStorage.getItem('peacetol-user')
}

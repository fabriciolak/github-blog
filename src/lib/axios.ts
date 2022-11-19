import axiox from 'axios'

export const api = axiox.create({
  baseURL: 'https://api.github.com',
})

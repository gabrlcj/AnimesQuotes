import axios from 'axios'

const api = axios.create({
  baseURL: 'https://animechan.vercel.app/api/',
})

export default api

import axios from 'axios'

const HOST = 'http://api.openweathermap.org/data/2.5'

const HTTP = axios.create({
  baseURL: HOST,
  headers: {
    'Accept': 'application/json'
  }
})

export default HTTP

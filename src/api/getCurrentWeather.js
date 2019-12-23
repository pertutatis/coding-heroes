import HTTP from '@/services/http'

const PATH = '/weather?id=2509954&units=metric&lang=es&APPID=2f43d1ad988c0c47f9216bf57834edbd'

function getCurrentWeather () {
  return HTTP.get(PATH)
    .then(res => res)
    .catch(error => {
      throw error
    })
}

export default getCurrentWeather

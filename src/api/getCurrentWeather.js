import HTTP from '@/services/http'
import Weather from '@/domain/models/Weather'

const PATH = '/weather?id=2509954&units=metric&lang=es&APPID=2f43d1ad988c0c47f9216bf57834edbd'

function getCurrentWeather () {
  return HTTP.get(PATH)
    .then(res => new Weather(res.data.main))
    .catch(error => {
      throw error
    })
}

export default getCurrentWeather

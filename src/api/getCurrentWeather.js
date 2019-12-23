import HTTP from '@/services/http'
import Weather from '@/domain/models/Weather'
import cities from '@/domain/models/Cities'

const PATH = '/weather?id={cityId}&units=metric&lang=es&APPID=2f43d1ad988c0c47f9216bf57834edbd'

function getCurrentWeather (city) {
  const url = PATH.replace('{cityId}', cities[city])

  return HTTP.get(url)
    .then(res => new Weather(res.data.main))
    .catch(error => {
      throw error
    })
}

export default getCurrentWeather

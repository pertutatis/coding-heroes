class Weather {
  constructor (data) {
    this.pressure = data.pressure
    this.temperature = data.temperature
    this.temperatureMin = data.temperatureMin
    this.temperatureMax = data.temperatureMax
  }
}

export default Weather

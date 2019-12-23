class Weather {
  constructor (data) {
    this.pressure = data.pressure
    this.temperature = data.temp
    this.temperatureMin = data.temp_min
    this.temperatureMax = data.temp_max
  }
}

export default Weather

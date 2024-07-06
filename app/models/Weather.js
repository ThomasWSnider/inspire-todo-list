export class Weather {
  constructor(data) {
    this.city = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].description
    this.icon = data.weather.icon
  }
}
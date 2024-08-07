export class Weather {
  constructor(data) {
    this.city = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather.icon
    this.tempDisplay = 1
  }


  get weatherCardHTML() {
    return `
                  <div class="p-2">
                    <p class="m-0">${this.tempUnit}</p>
                    <p>${this.weather}</p>
                  </div>
                  <img class="pt-2 mb-2" src="${this.icon}" alt="Weather Icon">
    `
  }

  get degreesFarenheit() {
    return `${((this.temp - 273.15) * (9 / 5) + 32).toFixed(0)}° F`
  }

  get degreesCelsius() {
    return `${(this.temp - 273.15).toFixed(0)}° C`
  }

  get degreesKelvin() {
    return `${this.temp.toFixed(0)}° K`
  }

  get tempUnit() {
    if (this.tempDisplay == 0) return this.degreesKelvin
    if (this.tempDisplay == 1) return this.degreesFarenheit
    if (this.tempDisplay == 2) return this.degreesCelsius
  }

}
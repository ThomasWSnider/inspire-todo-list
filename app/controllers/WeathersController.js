import { AppState } from "../AppState.js";
import { weathersService } from "../services/WeathersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class WeathersController {
  constructor() {
    console.log('Weathers Controller');
    AppState.on('weather', this.drawWeatherCard)
    this.getWeather()
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawWeatherCard() {
    let weather = AppState.weather
    setHTML('weatherCard', weather.weatherCardHTML)
  }

  toggleTempDisplay() {
    weathersService.toggleTempDisplay()
  }
}
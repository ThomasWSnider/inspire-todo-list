import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeathersService {
  constructor() {
    console.log('Weathers Service');
  }

  async getWeather() {
    const response = await api.get(`api/weather`)
    const newWeather = new Weather(response.data)
    AppState.weather = newWeather
    console.log(AppState.weather);
  }

  toggleTempDisplay() {
    const weather = AppState.weather
    weather.tempDisplay++
    if (weather.tempDisplay > 2) weather.tempDisplay *= 0
    AppState.emit('weather')
    console.log(weather.tempDisplay);
  }
}

export const weathersService = new WeathersService
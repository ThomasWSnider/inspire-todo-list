import { Background } from "./models/Background.js"
import { Quote } from "./models/Quote.js"
import { ToDo } from "./models/ToDo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {ToDo[]} */
  toDos = []

  /**@type {Quote} */
  quote = null

  /**@type {Weather} */
  weather = null

  /**@type {Background} */
  background = null





  queries = [
    "Acadia",
    "American Samoa",
    "Arches",
    "Badlands",
    "Big Bend",
    "Biscayne",
    "Black Canyon of the Gunnison",
    "Bryce Canyon",
    "Canyonlands",
    "Capitol Reef",
    "Carlsbad Caverns",
    "Channel Islands",
    "Congaree",
    "Crater Lake",
    "Cuyahoga Valley",
    "Death Valley",
    "Denali",
    "Dry Tortugas",
    "Everglades",
    "Gates of the Arctic",
    "Gateway Arch",
    "Glacier",
    "Glacier Bay",
    "Grand Canyon",
    "Grand Teton",
    "Great Basin",
    "Great Sand Dunes",
    "Great Smoky Mountains",
    "Guadalupe Mountains",
    "Haleakalā",
    "Hawaiʻi Volcanoes",
    "Hot Springs",
    "Indiana Dunes",
    "Isle Royale",
    "Joshua Tree",
    "Katmai",
    "Kenai Fjords",
    "Kings Canyon",
    "Kobuk Valley",
    "Lake Clark",
    "Lassen Volcanic",
    "Mammoth Cave",
    "Mesa Verde",
    "Mount Rainier",
    "North Cascades",
    "Olympic",
    "Petrified Forest",
    "Pinnacles",
    "Redwood",
    "Rocky Mountain",
    "Saguaro",
    "Sequoia",
    "Shenandoah",
    "Theodore Roosevelt",
    "Virgin Islands",
    "Voyageurs",
    "White Sands",
    "Wind Cave",
    "Wrangell-St. Elias",
    "Yellowstone",
    "Yosemite",
    "Zion"
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())
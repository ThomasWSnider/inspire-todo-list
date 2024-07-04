import { AppState } from "../AppState.js";
import { backgroundsService } from "../services/BackgroundsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class BackgroundsController {
  constructor() {
    console.log('Images are fun to look at');
    AppState.on('background', this.drawBackground)
    this.getBackground()
  }

  async getBackground() {
    try {
      await backgroundsService.getBackground()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawBackground() {
    const background = AppState.background
    let backgroundHTML = background.backgroundHTML
    setHTML('backgroundDetails', backgroundHTML)
    document.body.style.backgroundImage = `url(${background.imgUrl})`
  }

}
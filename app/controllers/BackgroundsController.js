import { backgroundsService } from "../services/BackgroundsService.js";
import { Pop } from "../utils/Pop.js";

export class BackgroundsController {
  constructor() {
    console.log('Images are fun to look at');
    this.getImage()
  }

  async getImage() {
    try {
      await backgroundsService.getBackground()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}
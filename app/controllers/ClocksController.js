import { setHTML, setText } from "../utils/Writer.js";

export class ClocksController {
  constructor() {
    console.log('I am clock lalala');
    this.getTime()
    setInterval(this.getTime, 1000)
  }

  getTime() {
    setText('timeClock', new Date().toLocaleString("en-US", { hour: '2-digit', minute: '2-digit', hour12: true }))
  }

}
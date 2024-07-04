export class Background {
  constructor(data) {
    this.imgUrl = data.largeImgUrl
    this.tags = data.tags
    this.author = data.author
  }

  get backgroundHTML() {
    return `
    <p class="mb-0">Image By</p>
    <p> ${this.author}</p>
    `
  }

}
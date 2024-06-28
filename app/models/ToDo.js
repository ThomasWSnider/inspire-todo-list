export class ToDo {
  constructor(data) {
    this.description = data.description
    this.completed = data.completedS
    this.id = data.id
  }




  get toDoHTMLTemplate() {
    return `
    <div class="col-12 mb-2">
      <div class="form-check d-flex align-items-center">
        <input class="form-check-input me-2" type="checkbox" id="flexCheckDefault" 
        ${this.completed ? 'checked' : ''}>
        <label class="form-check-label" for="flexCheckDefault">
          ${this.description}
        </label>
        <button onclick="app.ToDosController.destroyToDo('${this.id}')" class="btn btn-outline-danger ms-auto"><i class="mdi mdi-delete-forever"></i></button>
      </div>
    </div>
    `
  }

}
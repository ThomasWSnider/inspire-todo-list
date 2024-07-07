import { AppState } from "../AppState.js";
import { toDosService } from "../services/ToDosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class ToDosController {
  constructor() {
    console.log('ToDosController reporting');
    AppState.on('toDos', this.drawToDos)
    AppState.on('toDos', this.drawToDoTotal)
    AppState.on('user', this.getToDos)
    AppState.on('user', this.drawToDoContainer)
  }

  drawToDoContainer() {
    const toDoContainer = document.getElementById('toDoContainer')
    toDoContainer.removeAttribute('hidden')
  }
  drawToDoTotal() {
    const toDos = AppState.toDos
    const uncompletedToDos = toDos.filter((toDo) => !toDo.completed)
    setHTML('toDoNumberA', uncompletedToDos.length)
    setHTML('toDoNumberB', uncompletedToDos.length)
  }

  drawToDos() {
    const todos = AppState.toDos
    let toDosHTMLString = ``
    todos.forEach((toDo) => toDosHTMLString += toDo.toDoHTMLTemplate)
    setHTML('toDoList', toDosHTMLString)
  }

  async getToDos() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async makeNewToDo() {
    try {
      event.preventDefault()
      const form = event.target
      const toDoData = getFormData(form)
      toDoData.description = toDoData.description.trim()
      if (toDoData.description == '') throw new Error('Task must have at least 3 characters')
      console.log('I have the todo data', toDoData);
      await toDosService.makeNewToDo(toDoData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async destroyToDo(toDoId) {
    try {
      const confirm = await Pop.confirm('Are you sure?', 'This item on your To Do List will be gone forever', 'Yes I am sure')
      console.log(confirm);
      if (!confirm) return

      await toDosService.destroyToDo(toDoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async toggleCompleteToDo(toDoId) {
    try {
      await toDosService.toggleCompleteToDo(toDoId)
    } catch (error) {
      Pop.error(error)
      console.log(error);
    }
  }
}
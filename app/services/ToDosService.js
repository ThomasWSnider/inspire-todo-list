import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDosService {
  constructor() {
    console.log('ToDosService is connected');
  }

  async getToDos() {
    const response = await api.get('api/todos')
    console.log('I have your to do list sir', response.data);
    const myToDos = response.data.map((todoPOJO) => new ToDo(todoPOJO))
    AppState.toDos = myToDos
  }

  async makeNewToDo(formData) {
    const response = await api.post('api/todos', formData)

    console.log('I am making a new note', response.data);

    const newToDo = new ToDo(response.data)

    AppState.toDos.push(newToDo)
  }

  async toggleCompleteToDo(toDoId) {
    const toDoIndex = AppState.toDos.findIndex((toDo) => toDoId == toDo.id)
    const foundToDo = AppState.toDos[toDoIndex]

    const response = await api.put(`api/todos/${toDoId}`, { completed: !foundToDo.completed })
    console.log('YOU FINISHED!', response.data);

    const newToDo = new ToDo(response.data)

    AppState.toDos.splice(toDoIndex, 1, newToDo)
  }

  async destroyToDo(toDoId) {
    const response = await api.delete(`api/todos/${toDoId}`)
    console.log('🪓 the todo', response.data);
    const indexToDestroy = AppState.toDos.findIndex((todo) => toDoId == todo.id)
    AppState.toDos.splice(indexToDestroy, 1)
  }

}

export const toDosService = new ToDosService
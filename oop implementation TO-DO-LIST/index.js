//grab all elements
const form = document.querySelector("form")
const list = document.querySelector("lists")





//class to-do-lists
class todolist{
  constructor(text){
    this.text = text
  }
}

//class UI
class UI{

  static displayTasks(){
    const tasks = Storage.getTasks() //set tasks to localStorage

    tasks.forEach((task) => UI.addTaskToList(task))

  }

  static addTaskToList(book){
    const

  }
}


//class for local storage
class Storage{

}




//addEventListener adding a todo task

// deleting tasks

//display todo tasks


//form section
form.addEventListener("submit", (e) => {
  e.preventDefault
})

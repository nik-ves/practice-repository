// type Todo = {
//   id: string;
//   text: string;
// };

// export default Todo;

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

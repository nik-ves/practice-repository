import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // must have a generic type and a start value for a ref to work

  const submitHandler = (event: React.FormEvent) => {
    // for form submission type is React.FormEvent
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />

      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;

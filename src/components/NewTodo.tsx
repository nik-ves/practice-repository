const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => { // for form submission type is React.FormEvent
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />

      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;

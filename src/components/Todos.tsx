import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // React.FC makes it clear that code is a function that acts as a function component
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;

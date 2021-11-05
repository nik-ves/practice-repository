const Todos: React.FC<{ items: string[] }> = (props) => {
  // React.FC makes it clear that code is a function that acts as a function component
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

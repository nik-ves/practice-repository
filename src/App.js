import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import { useReducer } from "react";

const initalState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknown function.");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json)
      .then((data) => dispatch({ tpye: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

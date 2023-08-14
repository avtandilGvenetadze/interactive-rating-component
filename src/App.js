import "./App.css";
import { useState } from "react";
import EvaluationPage from "./evaluationPage/EvaluationPage";
import ThankYouPage from "./thankYouPage/ThankYouPage";

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setCliked] = useState(false);
  const handleclick = function () {
    if (count > 0) {
      setCliked(!clicked);
    }
  };
  console.log(clicked);
  return !clicked ? (
    <EvaluationPage
      count={count}
      setCount={setCount}
      handleclick={handleclick}
    />
  ) : (
    <ThankYouPage count={count} />
  );
}

export default App;

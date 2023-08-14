import "./evaluationPage.css";

function EvaluationPage(props) {
  const arrayOfNumbers = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div className=" star-wrapper">
        <img src="./images/icon-star.svg" alt="starImage" />
      </div>
      <h1>How did we do?</h1>
      <p className="main-p">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons-wrapper">
        {arrayOfNumbers.map((number) => {
          return (
            <button
              style={
                number === props.count
                  ? { background: "#7C8798", color: "white" }
                  : {}
              }
              className="regular-button"
              key={number}
              onClick={() => props.setCount(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
      <button className="submit" onClick={props.handleclick}>
        SUBMIT
      </button>
    </div>
  );
}

export default EvaluationPage;

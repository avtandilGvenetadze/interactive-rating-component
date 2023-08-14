import "./thankYouPage.css";

function ThankYouPage(props) {
  return (
    <div className="container">
      <img className="main-image" src="./images/illustration-thank-you.svg" />
      <div className="answer">You selected {props.count} out of 5</div>
      <h2 className="thank-you">Thank you!</h2>
      <p className="last-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouPage;

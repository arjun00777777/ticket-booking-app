import { React, useState } from "react";
import { Link } from "react-router-dom";
import Payment from "./payment";
import "./styles.css";
export const ticketCost = 200;
export default function Hallseating() {
  const [clicks, setClicks] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const cost = clicks * 200;
  console.log(cost);
  console.log(clicks);
  function handleClick() {
    setClicks(clicks + 1);
  }

  function selected(event) {
    setClicks(clicks + 1);
    setButtonDisabled(true);
    const element = event.target;
    element.style.background = "blue";
  }

  function cancelselected(event) {
    setClicks(clicks - 3);
    const element = event.target;
    event.preventDefault();
    element.style.background = "";
  }
  return (
    <div>
      <div className="screen">screen</div>
      <h3>price=200</h3>
      <div className="seats">
        <div className="col">
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <div className="col">
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <div className="col">
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <div className="col">
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <div className="col">
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <div
          className="col-top"
          onClick={selected}
          onDoubleClick={cancelselected}
          click={handleClick}
          disabled={buttonDisabled}
        >
          <div className="row" onClick={selected}>
            <div className="seat">1</div>
            <div className="seat">2</div>
            <div className="seat">3</div>
          </div>
          <div
            className="row"
            onClick={selected}
            onDoubleClick={cancelselected}
            click={handleClick}
            disabled={buttonDisabled}
          >
            <div className="seat">4</div>
            <div className="seat">5</div>
            <div className="seat">6</div>
          </div>
        </div>
        <h3> you have selected {clicks} seats </h3>
        <div>
          <Link to="/payment">
            <button>PAY NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

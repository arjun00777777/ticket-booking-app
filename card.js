import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img
          className="card-img-top"
          src={props.image}
          alt="..."
          key={props.keys}
          onClick={props.handleclick}
        />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h3 className="card-lang">Language : {props.language}lugu</h3>
          <h3 className="card-date">Released On : {props.released}</h3>
          <h4> {props.credits}</h4>
        </div>
      </div>
    </div>
  );
}

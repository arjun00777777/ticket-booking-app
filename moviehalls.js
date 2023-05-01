import React from "react";
import { Link } from "react-router-dom";

const halls = [
  {
    id: 1,
    name: "PVR Cinemas",
    location: "Ampa Skywalk, Aminjikarai, Chennai",
    timings: ["9:00AM", " 12:00PM", " 3:00PM", " 6:00PM"]
  },
  {
    id: 2,
    name: "INOX Cinemas",
    location: "Forum Vijaya Mall, Vadapalani, Chennai",
    timings: ["10:00 AM", " 1:00PM", " 4:00PM", " 7:00PM"]
  },
  {
    id: 3,
    name: "Escape Cinemas",
    location: "Express Avenue Mall, Royapettah, Chennai",
    timings: ["11:00AM", " 2:00PM", " 5:00PM", " 8:00PM"]
  },
  {
    id: 4,
    name: "AGS Cinemas",
    location: "OMR, Navalur, Chennai",
    timings: ["10:30AM", " 1:30PM", " 4:30PM", " 7:30PM"]
  },
  {
    id: 5,
    name: "Sathyam Cinemas",
    location: "Royapettah High Rd, Royapettah, Chennai",
    timings: ["10:00AM", " 1:00PM", " 4:00PM", " 7:00PM"]
  }
];

export default function Moviehalls() {
  return (
    <div>
      <p className="price">Sort By Price</p>
      <div>
        <p className="price-low">100 - 150</p>
        <p className="price-medium">150 - 200</p>
        <p className="price-high">200 - 250</p>
      </div>
      {halls.map((items) => (
        <div className="hallcards">
          <div className="card hallcard" key={items.id}>
            <input type="date" name="date" required />
            <h2 className="hall-name">{items.name}</h2>
            <p>Cancellation available</p>
            <h4 className="hall-location">{items.location}</h4>
            <div className="hall-timings">
              <Link to="hallseating">
                <p className="hall-timings-0">{items.timings[0]}</p>
              </Link>
              <Link to="hallseating">
                <p className="hall-timings-1">{items.timings[1]}</p>
              </Link>
              <Link to="hallseating">
                <p className="hall-timings-2">{items.timings[2]}</p>
              </Link>
              <Link to="hallseating">
                <p className="hall-timings-3">{items.timings[3]}</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

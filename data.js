import React, { useState, useEffect } from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const Data = () => {
  const Api_key = "&api_key=2466a0658d179503ca9e1c5dc593bccd";
  const base_url = "https://api.themoviedb.org/3";
  const url = base_url + "/discover/movie?sort_by=popularity.desc" + Api_key;
  const [rsdata, setrdata] = useState([]);
  const [moviedata, setmoviedata] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2466a0658d179503ca9e1c5dc593bccd&with_original_language=te"
    )
      .then((res) => res.json())
      .then((mrdata) => {
        setrdata(mrdata.results);
        console.log(rsdata.id);
      });
  }, [url]);
  const handleclick = (items) => {
    setmoviedata(items);
  };
  return (
    <div>
      {moviedata ? (
        <div onClose={() => setmoviedata(null)}>
          <img
            className="overview-image"
            src={
              "https://image.tmdb.org/t/p/original/" + moviedata.backdrop_path
            }
            alt="..."
          />
          <h3>{moviedata.original_title}</h3>
          <p></p>
          <h2>Movie Summary</h2>
          <p>{moviedata.overview}</p>
          <p>Rating : {moviedata.vote_average}</p>
          <p>Language : {moviedata.original_language}lugu</p>
          <p>Released On : {moviedata.release_date}</p>
          <Link to="/moviehalls">
            <button className="book-ticket">Book Ticket</button>
          </Link>
        </div>
      ) : (
        rsdata.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={"https://image.tmdb.org/t/p/original/" + item.backdrop_path}
            descri={item.overview}
            language={item.original_language}
            released={item.release_date}
            handleclick={() => handleclick(item)}
          />
        ))
      )}
    </div>
  );
};
export default Data;

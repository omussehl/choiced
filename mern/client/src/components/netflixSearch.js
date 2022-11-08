// useState is a hook, and we use curly braces to destructure it
import React, { useState, useRef } from "react";
import { isEmpty } from "lodash";

const NetflixSearch = () => {
  // this is the initial value
  const document = useRef();

  // this function fetches data from the backend, returns as a json file, and saves it to my document file
  const netflix = () => {
    fetch("http://localhost:8080/netflix")
      .then((res) => {
        return res.json();
      })
      .then((data) => (document.current = data));
  };

  netflix();

  const [media, setMedia] = useState(null);
  const [type, setType] = useState("all");

  const handleInputChange = (e) => {
    setType(e.target.value);
  };

  const handleClick = () => {
    // the new value when clicked
    setMedia({
      title: document.current.title,
      type: document.current.type,
      releaseYear: document.current.release_year,
      rating: document.current.rating,
      duration: document.current.duration,
      description: document.current.description,
    });
    console.log(document.current);
  };

  return (
    <div className="p-3">
      <h2 className="text-umber">Netflix</h2>
      <p>The page searches Netflix TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <div>
        <i className="">
          Please select whether you would like to search for Movies, TV shows,
          or both.
        </i>
        <div className="flex flex-col p-1 ">
          <label>
            TV-Shows
            <input
              type="radio"
              value="tv"
              checked={type === "tv"}
              name="Tv Shows"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Movies
            <input
              type="radio"
              value="movie"
              checked={type === "movie"}
              name="Movie"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Both
            <input
              type="radio"
              value="all"
              checked={type === "all"}
              name="All"
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-rmetalic p-2 rounded-md text-white mb-2 mt-2"
      >
        Search
      </button>
      <div role="textbox">
        {!isEmpty(media) ? (
          <p className="shadow-md rounded-md p-3 bg-white">
            Your random result is: <b>{media.title}</b>
            <br />
            {media.title} is a {media.type} that came out in {media.releaseYear}
            . It is {media.rating} rated, and is {media.duration} long. <br />
            About: <i>{media.description}</i>
          </p>
        ) : (
          <p>click the search button above</p>
        )}
      </div>
    </div>
  );
};

export default NetflixSearch;

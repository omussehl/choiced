// useState is a hook, and we use curly braces to destructure it
import React, { useState, useRef } from "react";
import { isEmpty } from "lodash";

const HuluSearch = () => {
  // this is the initial value
  const [media, setMedia] = useState(null);

  // this function fetches data from the backend, returns as a json file, and saves it to my document file
  const hulu = async () => {
    await fetch("http://localhost:8080/hulu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const randomCount = Math.floor(Math.random() * data.length);
        setMedia({
          title: data[randomCount].title,
          type: data[randomCount].type,
          releaseYear: data[randomCount].release_year,
          rating: data[randomCount].rating,
          duration: data[randomCount].duration,
          description: data[randomCount].description,
        });
      });
  };

  const handleClick = async () => {
    hulu();
  };

  return (
    <div className="p-3">
      <h2 className="text-umber">Hulu</h2>
      <p>The page searches Hulu TV Shows and Movies!</p>
      <h3 className="text-umber">Type</h3>
      <div>
        <i className="">
          Please select whether you would like to search for Movies, TV shows,
          or both.
        </i>
        <p className="">Movie - TV Show</p>
      </div>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-rmetalic p-2 rounded-md text-white mb-2"
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

export default HuluSearch;

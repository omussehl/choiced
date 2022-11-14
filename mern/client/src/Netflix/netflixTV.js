// useState is a hook, and we use curly braces to destructure it
import React, { useState } from "react";
import { isEmpty } from "lodash";

const NetflixTV = () => {
  // this is the initial value
  const [media, setMedia] = useState(null);

  // this function fetches data from the backend, returns as a json file, and saves it to my document file
  const hulu = async () => {
    await fetch("http://localhost:8080/netflix/tv")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const randomCount = Math.floor(Math.random() * data.length);
        console.log(data[randomCount]);
        console.log(data.length);
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

  // this is only displaying hulu not hulutTV

  return (
    <div>
      <h3 className="text-umber">Now search for your random Netflix TV Show</h3>
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
          <p></p>
        )}
      </div>
    </div>
  );
};

export default NetflixTV;

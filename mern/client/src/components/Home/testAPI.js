// useState is a hook, and we use curly braces to destructure it
import React, { useState } from "react";
import { isEmpty } from "lodash";

const Test = () => {
  // this is the initial value

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "48b6118395msh859e02fcc8842abp140278jsn4060ba8d6df9",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const [media, setMedia] = useState(null);
  // this function fetches data from the backend, returns as a json file, and saves it to my document file
  const getData = () => {
    fetch(
      // "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
      options
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setMedia(data.results);
      });
  };

  const handleClick = () => {
    getData();
  };

  return (
    <div className="p-3">
      <h2 className="text-umber">Movie of the Night API</h2>

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
            {media.title} is a {media.type} that came out in {media.year} on .
            It is {media.rating} rated, and is {media.duration} long. <br />
            About: <i>{media.overview}</i>
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Test;

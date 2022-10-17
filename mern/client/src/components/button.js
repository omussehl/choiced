// useState is a hook, and we use curly braces to destructure it
import React, { useState, useEffect, useRef } from "react";
import { isEmpty } from "lodash";

const ButtonSearch = () => {
  // this is the initial value
  const document = useRef(0);

  const netflix = () => {
    fetch("http://localhost:8080/netflix")
      .then((res) => {
        return res.json();
      })
      .then((data) => (document.current = data));
  };

  netflix();

  const [media, setMedia] = useState(null);

  const handleClick = async () => {
    // the new value when clicked
    netflix();
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
    <div className="button">
      <h2>Click search</h2>
      <button onClick={handleClick}>Search</button>
      {!isEmpty(media) ? (
        <p>
          Your random result is: {media.title}
          <br />
          {media.title} is a {media.type} that came out in {media.releaseYear}.
          It is {media.rating} rated, and is {media.duration} long. <br />
          About: {media.description}
        </p>
      ) : null}
    </div>
  );
};

export default ButtonSearch;

// useEffect(() => {
//   fetch("http://localhost:8080/netflix")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => (document.current = data));
// }, []);

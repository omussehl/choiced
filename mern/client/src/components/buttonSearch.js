// useState is a hook, and we use curly braces to destructure it
import React, { useState, useRef } from "react";
import { isEmpty } from "lodash";

const ButtonSearch = () => {
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

  const handleClick = () => {
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

  let text = (
    <div>
      {!isEmpty(media) ? (
        <p>
          Your random result is: {media.title}
          <br />
          {media.title} is a {media.type} that came out in {media.releaseYear}.
          It is {media.rating} rated, and is {media.duration} long. <br />
          About: <i>{media.description}</i>
        </p>
      ) : null}
    </div>
  );

  return (
    <div className="search">
      <button onClick={handleClick} type="submit">
        Search
      </button>
      <div role="textbox">{text}</div>
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

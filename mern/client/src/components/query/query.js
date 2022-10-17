// import React from "react";
import React, { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const netflixTitles = [
  "Peaky Blinders",
  "Breaking Bad",
  "Stranger Things",
  "Squid Games",
  "The Witcher",
  "Love Island",
  "Naruto",
];

// this should return a random index.
function randomNetflixTitle() {
  let ranTitle =
    netflixTitles[Math.floor(Math.random() * netflixTitles.length)];
  return ranTitle;
}

export { randomNetflixTitle };

// const Query = () => {
//   const showAlert = () => {
//     let popup = randomNetflixTitle();
//     alert(popup);
//     console.log(popup);
//   };

//   return (
//     <div>
//       <p>testing with a javascript function</p>
//       <button onClick={showAlert}>Click Me</button>
//       <p>Here we are testing for MongoDB connection</p>
//     </div>
//   );
// };

const Query = () => {};

export default Query;

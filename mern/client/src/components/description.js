import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

const description = (
  <p>
    Choiced is a site that helps with some of the most difficult decisions one
    can have, such as deciding what to watch. There are so many options on
    eaching streaming service, and we want to make this as frictionless as
    possible.
  </p>
);

// this is a function component - and importantly returns JSX
const Description = () => {
  return (
    <div>
      <h1>Welcome to Choiced</h1>
      {description}
      <h3>Streaming Service</h3>
      <div>
        <i>
          Please select your streaming services you would like to search from
        </i>
        <p>netflix - prime video - disney+ - Hulu</p>
      </div>
      <h3>Type</h3>
      <div>
        <i>
          Please select whether you would like to search for Movies, TV shows,
          or both.
        </i>
        <p>Movie - TV Show</p>
      </div>
    </div>
  );
};
export default Description;

// regular component example:
// class Search extends React.Component {render(<h1>Title</h>)} OR
// This is another way to export the class - but keeping this here for reference.
// export default function Search() {
//   return (
//     <div>
//     </div>
//   )
// }

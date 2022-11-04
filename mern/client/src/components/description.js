import React from "react";

const description = (
  <p className="">
    Choiced is a site that helps with some of the most difficult decisions one
    can have, such as deciding what to watch. There are so many options on
    eaching streaming service, and we want to make this as frictionless as
    possible.
  </p>
);

// this is a function component - and importantly returns JSX
const Description = () => {
  return (
    <div className="text-centered p-3">
      <h1 className="text-umber">Welcome to Choiced</h1>
      {description}
      <h3 className="text-umber">Streaming Service</h3>
      <div>
        <i className="">
          Please select your streaming services you would like to search from
        </i>
        <p className="text-secondary">netflix - prime video - disney+ - Hulu</p>
      </div>
      <h3 className="text-umber">Type</h3>
      <div>
        <i className="">
          Please select whether you would like to search for Movies, TV shows,
          or both.
        </i>
        <p className="">Movie - TV Show</p>
      </div>
    </div>
  );
};
export default Description;

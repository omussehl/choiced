import React from "react";
import CheckInlineExample from "./checkbox";
import Button from 'react-bootstrap/Button';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

const header = (
  <h1>
    Welcome to Choiced
  </h1>
)

const description = (
  <p>
    Choiced is a site that helps with some of the most difficult decisions one can have, such as deciding what to watch. There are so many options on eaching streaming service, and we want to make this as frictionless as possible. 
  </p>
)

const streamingInput = (
  <p>testing</p>
)

const typeInput = (
  <p>type input test</p>
)

const searchButton = (
  <Button as="input" type="submit" value="Submit" onClick='alert'></Button>
)



// this is a function component - and importantly returns JSX
const Search = () => {
  return (
    <div>
    {header}
    {description}
    <br></br>
    <h2>Streaming Service</h2>
    {streamingInput}
    {CheckInlineExample}
    <h2>Type</h2>
    {typeInput}
    {searchButton}
  </div>
    )
};
export default Search;


// regular component example: 
// class Search extends React.Component {render(<h1>Title</h>)} OR
// This is another way to export the class - but keeping this here for reference. 
// export default function Search() {    
//   return (
//     <div>
//     </div>
//   )
// }
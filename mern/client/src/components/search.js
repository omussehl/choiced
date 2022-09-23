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
  <Button as="input" type="submit" value="Submit"></Button>
)

const queryOutput = (
  <p>query output test</p>
)

export default function Search() {
    
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
      {queryOutput}
    </div>
  )
}
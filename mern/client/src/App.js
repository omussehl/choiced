import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
// We import all the components we need in our app
import Search from "./components/search/search";
import Query from "./components/query/query.js";
import Nav from "./components/navbar/navbar";

 
const App = () => {
 return (
   <div>
     <Nav />
     <Search />
     <Query/>

   </div>
 );
};
 
export default App;
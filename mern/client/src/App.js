import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
// We import all the components we need in our app
import Navbar from "./components/navbar/navbar.js";
import Search from "./components/search";
import Query from "./components/query/query.js";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Search />
     <Query/>

   </div>
 );
};
 
export default App;
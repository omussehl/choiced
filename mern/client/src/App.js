import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Search from "./components/search";

 
const App = () => {
 return (
   <div>
     <Navbar />
     <Search />
   </div>
 );
};
 
export default App;
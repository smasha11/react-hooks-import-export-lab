import React from "react";
import { username, city } from "../data/user.js";
function Home (){
  return (
    <div id="home">
      
      <p>Welcome, {username} from {city}!</p>
    </div>
  );
}

export default Home;


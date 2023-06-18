import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="main-content">
      <div className="container">
        <h1>Our Testimonals</h1>
        <div className="underline"></div>
      </div>
      <Testimonials reviews={reviews} />
      </div>

    </div>
    
     
  );
};

export default App;

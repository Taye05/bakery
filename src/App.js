import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router} from "react-router-dom"
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import  {ProductData} from "./components/Products/data"

function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar />  */}
      <Hero />
      <Products heading="choose your favourite" data={ProductData}/>
    </Router>
  );
}

export default App;

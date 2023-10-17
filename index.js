import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Body from "./Body";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import LotteryForm from "./LotteryForm";
import LotteryFormSteps from "./LotteryFormSteps";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <>
      <Navigation />    
      <Body /> 
      <Testimonial />  
      <Footer />   
      <LotteryForm />   
      <LotteryFormSteps />  
  </>
);


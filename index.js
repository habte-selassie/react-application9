import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Nav";
import Body from "./Body";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import LotteryForm from "./LotteryForm";
import LotteryFormSteps from "./LotteryFormSteps";
import Hooks from "./Hooks";
import Effector from "./Effect";
//import App from "./App";
//import { Router } from "react-router-dom";
//import { Router } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <>
      <Effector />
      {/* <Navigation />    
      <Body /> 
      <Testimonial />   
      <Footer />    
      <LotteryForm />   
      <LotteryFormSteps /> */}
  </>
);


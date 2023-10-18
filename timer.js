// styled components
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components"; // Import styled from styled-components library

document.documentElement.style.setProperty("--color-bg", "#22262E");
document.documentElement.style.setProperty("--color-heading", "#798EB0");
document.documentElement.style.setProperty("--color-counter", "#8973FD");
document.documentElement.style.setProperty("--font-family-heading", "Mukta");

const AppStyled = styled.div`
  background: transparent;
  color: var(--color-text);
  display: flex;
  min-height: 100vh;
  justify-content: center; /* Center the counter boxes horizontally */
  align-items: center; /* Center the counter boxes vertically */
`;

const BoxWrapperStyled = styled.div`
  background: rgba(255, 255, 255, 0.025); /* Background for the counter boxes */
  padding: 1rem; /* Adjusted padding for the counter boxes */
  border-radius: 1rem; /* Rounded corners for the counter boxes */
`;

// const ContainerStyled = styled.section`
//   margin: auto;
//   padding: 1rem;

//   @media (min-width: 48em) {
//     padding: 4rem;
//   }
// `;

const CounterStyled = styled.div`
  background: #181b3b; /* Set background for the timer boxes */
  border-radius: 1rem;
  color:'red';
  ${'' /* color: var(--color-counter); */}
  display: flex;
  flex-direction: column;
  font-family: "JetBrains Mono", mono;
  font-size: clamp(0.45rem, 1.8vw, 1.2rem); /* Adjusted font size */
  font-weight: 100;
  line-height: 1.5;
  margin: 10px 0px 0px 10px;
  text-align: center;
  margin-left:-2px;
  padding: 0.5vw 1vw; /* Adjusted padding for the timer boxes */
  margin: 10 auto; /* Center the timer box on the page */
  max-width: 1.74rem; /* Set the fixed width for the timer box */

  h2 {
    color:'red';
    ${'' /* color: var(--color-heading); */}
    font-family: var(--font-family-heading);
    font-size: 1.05rem; /* Adjusted font size for heading */
    font-weight: 300;
    letter-spacing: 0.10em;
    margin: 0.2rem 0 0;
    text-transform: uppercase;
  }

  p {
    color:'red';
    ${'' /* color: var(--color-heading); */}
    font-family: var(--font-family-heading);
    font-size: 0.56rem; /* Adjusted font size for subheading */
    padding-right: 10px;
    margin: -0.1rem 0 0;
    text-transform: uppercase;
    text-align: center;
  }
`;

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.25rem; /* Adjusted the gap between the counter boxes */
  margin: auto; /* Center the counter boxes on the page */

  @media (min-width: 35.5em) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

// const DateStyled = styled.header`
//   margin-bottom: 2rem;

//   & h1 {
//     color: var(--color-heading);
//     font-family: var(--font-family-heading);
//     font-size: clamp(1rem, 2vw, 99rem);
//     font-weight: 300;
//     letter-spacing: 0.1875em;
//     margin: unset;
//     text-align: center;
//     text-transform: uppercase;
//   }
// `;

const Counter = ({ displayValue, label }) => (
  <CounterStyled>
    <h2>{displayValue}</h2>
    <p>{label}</p>
  </CounterStyled>
);

const generateTimeDisplay = () => {
  const targetDate = new Date("October 16, 2023").getTime(); // Target date is October 16, 2023
  const rightJustNow = new Date().getTime() - 20 * 24 * 60 * 60 * 1000; // 20 days ago in milliseconds
  const runway = targetDate - rightJustNow;
  return {
    days: Math.max(0, Math.floor(runway / (1000 * 60 * 60 * 24))), // Ensure days is not negative
    hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((runway % (1000 * 60)) / 1000)
  };
};

const TimerComponent = () => {
  const [timeDisplay, setTimeDisplay] = useState(generateTimeDisplay());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AppStyled>
      <BoxWrapperStyled>
        <WrapperStyled>
          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
        </WrapperStyled>
      </BoxWrapperStyled>
    </AppStyled>
  );
};

export default TimerComponent
// mount
const theWholeEnchilada = document.createElement("div");
theWholeEnchilada.setAttribute("id", "theWholeEnchilada");
document.documentElement.append(theWholeEnchilada);
//const app = document.querySelector("#theWholeEnchilada");



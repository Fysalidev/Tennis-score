import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { selectDisplayText } from "../selectors";

const Score = styled.div`
  align-items: center;
  background: rgb(30, 55, 49);
  border-radius: 5px;
  color: rgb(228, 209, 9);
  display: flex;
  font-family: "Fredoka One", cursive;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  height: 5rem;
  justify-content: center;
  opacity: 0.8;
`;

/**
 * Display state of match
 * @returns { Component } Display
 */

const Display = () => {
  const displayText = useSelector(selectDisplayText);

  return <Score>{displayText}</Score>;

};

export default Display;

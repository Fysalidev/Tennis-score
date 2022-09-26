import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

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
  const gameIsPlaying = useSelector((state) => state.playing);
  const winner = useSelector((state) => state.winner);
  const player1Score = useSelector((state) => state.player1);
  const player2Score = useSelector((state) => state.player2);
  const advantage = useSelector((state) => state.advantage);

  if (winner) {
    return winner === "player1" ? (
      <Score>
        <p>Joueur 1 gagne 🏆</p>
      </Score>
    ) : (
      <Score>
        <p>Joueur 2 gagne 🏆</p>
      </Score>
    );
  } else if (gameIsPlaying === false) {
    return (
      <Score>
        <p>C'est la pause</p>
      </Score>
    );
  } else {
    let text = player1Score + " - " + player2Score;
    if (advantage) {
      if (advantage === "player1") {
        text = "🎾 " + text;
      } else {
        text = text + " 🎾";
      }
    }
    return (
      <Score>
        <p>{text}</p>
      </Score>
    );
  }
};

export default Display;

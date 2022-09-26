import React from "react";
import { useDispatch } from "react-redux";
import { playPause } from "../store";
import { useSelector } from "react-redux";

/**
 * On click button send action playPause to the store with useDispatch()
 * @returns { Component } PlayPauseButton
 */

function PlayPauseButton() {
  const gameIsPlaying = useSelector((state) => state.playing);
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(playPause());
      }}
    >
      {gameIsPlaying ? " | | " : " > "}
    </button>
  );
}

export default PlayPauseButton;

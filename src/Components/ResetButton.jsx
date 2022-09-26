import React from "react";
import { useDispatch } from "react-redux";
import { restartGame } from "../store";

function ResetButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(restartGame())}>Remettre à zéro</button>
  );
}

export default ResetButton;

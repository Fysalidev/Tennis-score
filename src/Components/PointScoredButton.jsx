import React from "react";
import { useDispatch } from "react-redux";
import { pointScored } from "../store";

const PointScoredButton = ({ playerId, children }) => {
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(pointScored(playerId));
      }}
    >
      {children}
    </button>
  );
};

export default PointScoredButton;

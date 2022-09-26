import { createStore } from "redux";

//Initial State
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};

// Actions
export const playPause = () => ({ type: "playPause" });
export const restartGame = () => ({ type: "restart" });
export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

// le reducer
function reducer(state, action) {
  if (action.type === "restart") {
    return initialState;
  }

  if (action.type === "playPause") {
    return {
      ...state,
      playing: !state.playing,
    };
  }

  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    if (state.winner) {
      return state;
    }

    if (state.playing === false) {
      return state;
    }

    const currentPlayerScore = state[player];
    if (currentPlayerScore <= 15) {
      return { ...state, [player]: currentPlayerScore + 15 };
    }

    if (currentPlayerScore === 30) {
      return { ...state, [player]: 40 };
    }

    if (currentPlayerScore === 40) {
      if (state[otherPlayer] !== 40) {
        return { ...state, winner: player };
      }

      if (state.advantage === player) {
        return { ...state, winner: player };
      }

      if (state.advantage === null) {
        return { ...state, advantage: player };
      }

      return { ...state, advantage: null };
    }
  }
  return state;
}

// Store
export const store = createStore(reducer, initialState);

import { createStore } from "redux";
import produce from "immer";

//Initial State
const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
  history: [
    // { player1: 15, player2: 40, winner: "player2" }
  ],
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
    return produce(state, (draft) => {
      if (draft.winner) {
        // Stocker le résultat dans history
        draft.history.push({
          player1: draft.player1,
          player2: draft.player2,
          winner: draft.winner,
        });
      }
      // Reset des autres propriétés
      draft.player1 = 0;
      draft.player2 = 0;
      draft.advantage = null;
      draft.winner = null;
      draft.playing = true;
    });
  }

  if (action.type === "playPause") {
    if (state.winner) {
      return state;
    }

    //Refactorisé avec Immer
    return produce(state, (draft) => {
      draft.playing = !draft.playing;
    });

    /* return {
      ...state,
      playing: !state.playing,
    }; */
  }

  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";

    if (state.winner) {
      //On ne peut pas marquer de point si le set est terminé
      return state;
    }

    if (state.playing === false) {
      //On ne peut pas marquer de point si le set est en pause
      return state;
    }

    //Refactorisé avec Immer
    return produce(state, (draft) => {
      const currentPlayerScore = draft[player];
      if (currentPlayerScore <= 15) {
        // 0 ou 15 => on ajoute 15
        draft[player] += 15;
        return;
      }
      if (currentPlayerScore === 30) {
        draft[player] = 40;
        return;
      }
      if (currentPlayerScore === 40) {
        if (draft[otherPlayer] !== 40) {
          // Le joueur à gagné
          draft.winner = player;
          return;
        }
        if (draft.advantage === player) {
          // Le joueur à gagné
          draft.winner = player;
          return;
        }
        if (draft.advantage === null) {
          // Le joueur a maintenant l'avantage
          draft.advantage = player;
          return;
        }
        // L'autre joueur a perdu l'avantage
        draft.advantage = null;
        return;
      }
    });

    /* const currentPlayerScore = state[player];
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
    } */
  }
  return state;
}

// Store
export const store = createStore(reducer, initialState);

// Visualiser les modifications du store
store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});

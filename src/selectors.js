//Sélectionne le joueur qui a l'avantage
export const selectPlayerHasAdvantage = (playerId) => {
  return (state) => state.advantage === playerId;
};

//Séléctionne le score d'un joueur
export const selectPlayerScore = (playerId) => {
  return (state) => state[playerId];
};

export const selectDisplayText = (state) => {
  if (state.winner) {
    return state.winner === "player1" ? (
      <p>Joueur 1 gagne 🏆</p>
    ) : (
      <p>Joueur 2 gagne 🏆</p>
    );
  } else if (state.playing === false) {
    return <p>C'est la pause</p>;
  } else {
    let text = state.player1 + " - " + state.player2;
    if (state.advantage) {
      if (state.advantage === "player1") {
        text = "🎾 " + text;
      } else {
        text = text + " 🎾";
      }
    }
    return <p>{text}</p>;
  }
};

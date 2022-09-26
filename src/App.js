import styled from "styled-components";
import Display from "./Components/Display";
import PlayPauseButton from "./Components/PlayPauseButton";
import PointScoredButton from "./Components/PointScoredButton";
import ResetButton from "./Components/ResetButton";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 1rem;

  & button {
    background: rgb(30, 55, 49);
    border-radius: 5px;
    color: white;
    flex-grow: 1;
    flex: 1 1 100px;
    font-family: "Fredoka One", cursive;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    height: 3rem;
    opacity: 0.8;
    border: solid 2px;
    
    &:hover {
      color: rgb(228, 209, 9);
    }
  }
`;

function App() {
  return (
    <Main>
      <Display />
      <ButtonsRow>
        <PointScoredButton playerId={"player1"}>Joueur 1</PointScoredButton>
        <PointScoredButton playerId={"player2"}>Joueur 2</PointScoredButton>
      </ButtonsRow>
      <ButtonsRow>
        <ResetButton />
        <PlayPauseButton />
      </ButtonsRow>
    </Main>
  );
}

export default App;

import { useState } from "react";
import GamePage from "./components/GamePage";
import StartPage from "./components/StartPage";

function App() {
	const [gameData, setGameData] = useState();

	if (gameData) {
		return <GamePage gameData={gameData} onExit={() => setGameData(null)} />
	} else {
		return <StartPage onGameData={setGameData} />
	}
}

export default App;

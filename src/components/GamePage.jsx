import Game from "./Game/Game";
import "./GamePage.css";

const GamePage = props => {
	console.log(props.gameData);

	return (
		<div className="center">
			<button className="exit_button" onClick={props.onReturn}>	Exit</button>
			<Game gameData={props.gameData} />
		</div>
	);
}

export default GamePage
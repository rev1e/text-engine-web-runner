import Game from "./Game/Game";

const GamePage = props => {
	console.log(props.gameData);

	return (
		<div>
			<button onClick={props.onReturn}>Return</button>
			<Game gameData={props.gameData} />
		</div>
	);
}

export default GamePage
import { useEffect, useState } from "react";
import Controls from "./Game/Controls";
import Room from "./Game/Room";

const GamePage = ({ gameData, onExit }) => {
	const rooms = gameData.rooms;

	const [currentRoomId, setCurrentRoomId] = useState(gameData.entry);

	const saveGame = () => {
		localStorage.setItem(gameData.id, currentRoomId);
	};

	const resetGame = () => {
		localStorage.removeItem(gameData.id);
		setCurrentRoomId(gameData.entry);
	};

	useEffect(() => {
		const save = localStorage.getItem(gameData.id);

		if (save) {
			setCurrentRoomId(save);
		}
	}, [])

	return (
		<div className="center">
			<Controls onExit={onExit} onSave={saveGame} onReset={resetGame} />
			<Room room={rooms[currentRoomId]} goTo={setCurrentRoomId} />
		</div>
	);
}

export default GamePage
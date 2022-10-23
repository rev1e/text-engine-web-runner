import { useEffect, useState } from "react";
import Controls from "./Game/Controls";
import Room from "./Game/Room";

const GamePage = ({ gameData, onExit }) => {
	const rooms = gameData.rooms;

	const [currentRoomId, setCurrentRoomId] = useState(gameData.metadata.entry);

	const saveGame = () => {
		localStorage.setItem(gameData.metadata.id, currentRoomId);
	};

	const resetGame = () => {
		localStorage.removeItem(gameData.metadata.id);
		setCurrentRoomId(gameData.metadata.entry);
	};

	useEffect(() => {
		const save = localStorage.getItem(gameData.metadata.id);

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
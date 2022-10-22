import { useState } from "react";

import RoomText from "./RoomText";
import RoomChoices from "./RoomChoices/RoomChoices";

const Game = props => {
	const game = props.gameData;
	const entry = game.entry;
	const rooms = game.rooms;

	const [currentRoomId, setCurrentRoomId] = useState(entry);

	const room = rooms[currentRoomId];

	const goTo = room_id => {
		setCurrentRoomId(room_id)
	}

	return (
		<div>
			<RoomText text={room.text} />
			<RoomChoices choices={room.choices} onSelect={goTo} />
		</div>
	);
}

export default Game;
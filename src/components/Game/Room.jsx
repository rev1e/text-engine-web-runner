import { useState } from "react";

import RoomText from "./RoomText";
import RoomChoices from "./RoomChoices/RoomChoices";

const Room = props => {
	const room = props.room;

	return (
		<div>
			<RoomText text={room.text} />
			<RoomChoices choices={room.choices} onSelect={props.goTo} />
		</div>
	);
}

export default Room;
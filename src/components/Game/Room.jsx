import { useState } from "react";

import RoomText from "./RoomText";
import RoomChoices from "./RoomChoices/RoomChoices";
import RoomImage from "./RoomImage";

const Room = props => {
	const room = props.room;

	let image;
	if (typeof(room.image) == "number") {
		image = props.images[room.image];
	}

	return (
		<div>
			{ image ? <RoomImage image={props.images[room.image]} /> : "" }
			<RoomText text={room.text} />
			<RoomChoices choices={room.choices} onSelect={props.goTo} />
		</div>
	);
}

export default Room;
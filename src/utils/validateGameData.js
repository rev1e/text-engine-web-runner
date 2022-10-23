const validateGameData = data => {
	// TODO

	const parsed_data = JSON.parse(data);
	
	// validate rooms
	const rooms = parsed_data.rooms;
	if (typeof(rooms) != "object" || typeof(rooms[0]) != "object") {
		throw "'rooms' doesn't exist";
	}
	const max_room = rooms.length - 1;
	for (let room of rooms ) {
		if (typeof(room) != "object") {
			throw "room has invalid type";
		}
		if (typeof(room.text) != "string") {
			throw "room 'text' doesn't exist";
		}

		if (typeof(room.choices) == "object" && typeof(room.choices[0]) == "object") {
			for (let choice of room.choices) {
				if (typeof(choice) != "object") {
					throw "room 'choice' has invalid type";
				}
				if (typeof(choice.text) != "string") {
					throw "room choice 'text' doesn't exist";
				}
				if (typeof(choice.to) != "number" || choice.to > max_room) {
					throw "room choice 'to' doesn't exist";
				}
			}
		}
	}

	// validate metadata
	const metadata = parsed_data.metadata;
	if (typeof(metadata) != "object") {
		throw "'metadata' does't exist";
	}
	if (typeof(metadata.id) != "string") {
		throw "metadata 'id' does't exist";
	}
	if (typeof(metadata.entry) != "number" || metadata.entry > max_room) {
		throw "metadata 'entry' does't exist";
	}

	return parsed_data;
};

export default validateGameData;

import "./RoomText.css";

const Room = props => {
	return (
		<p className="room_text">{ props.text }</p>
	);
}

export default Room;
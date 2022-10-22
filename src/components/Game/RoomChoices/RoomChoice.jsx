import "./RoomChoice.css";

const RoomChoice = ({ text, onClick }) => {
	return (
		<button className="room_choice" onClick={onClick}>{ text }</button>
	);
}

export default RoomChoice;
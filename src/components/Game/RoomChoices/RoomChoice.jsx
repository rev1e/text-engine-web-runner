const RoomChoice = ({ text, onClick }) => {
	return (
		<button onClick={onClick}>{ text }</button>
	);
}

export default RoomChoice;
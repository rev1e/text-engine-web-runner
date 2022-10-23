const RoomImage = ({ image }) => {
	return (
		<img src={"data:image/png;base64,"+image} />
	);
}

export default RoomImage;
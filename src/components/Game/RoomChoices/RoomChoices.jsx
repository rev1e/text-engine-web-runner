import RoomChoice from "./RoomChoice";
import "./RoomChoices.css";

const RoomChoices = (props) => {
	const choices = props.choices;
	const onSelect = n => {
		props.onSelect(choices[n].to);
	};

	return (
		<div className="room_choices">
			{ choices.map((choice, i) => (<>
				<RoomChoice key={i} text={choice.text} onClick={() => onSelect(i)} />
			</>)) }
		</div>
	);
}

export default RoomChoices;
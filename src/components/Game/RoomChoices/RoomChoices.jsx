import RoomChoice from "./RoomChoice";

const RoomChoices = (props) => {
	const choices = props.choices;
	const onSelect = n => {
		props.onSelect(choices[n].to);
	};

	return (
		<div>
			{ choices.map((choice, i) => (
				<RoomChoice key={i} text={choice.text} onClick={() => onSelect(i)} />
			)) }
		</div>
	);
}

export default RoomChoices;
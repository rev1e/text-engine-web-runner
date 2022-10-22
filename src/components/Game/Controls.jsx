import { useState } from "react";
import "./Controls.css";

const Controls = props => {
	const [savedText, setSavedText] = useState(false);

	const onSave = () => {
		props.onSave();
		setSavedText(true);
		setTimeout(() => {
			setSavedText(false);
		}, 2000);
	}

	return (
		<div className="game_controls">
			<button onClick={props.onExit}>Exit</button>
			<button onClick={onSave}>{ savedText ? "Saved" : "Save" }</button>
			<button onClick={props.onReset}>Reset Game</button>
		</div>
	)
}

export default Controls;
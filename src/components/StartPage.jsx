import { useState } from "react";
import validateGameData from "../utils/validateGameData";
import FileSelector from "./FileSelector/FileSelector";

const GamePage = props => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const onFileSelected = async files => {
		if (files.length != 1) {
			setError("Select A File");
			return;
		}

		setLoading(true);

		setTimeout(async () => { // fixme
		
		let gameData;
		try {
			gameData = validateGameData(await files[0].text());
		} catch (err) {
			console.error(err);
			setLoading(false);
			setError("Your Game Data Is Corrupted!");
		}

		props.onGameData(gameData);

		}, 2000);
	}

	return (
		<div>
			<FileSelector text="Select Game File" accept=".textgame" onFileSelected={onFileSelected} />
			{ loading && <p>
				Parsing game data... Please wait...
			</p> }
			{ error && <p style={{color:"red"}}>
				{ error }
			</p> }
		</div>
	);
}

export default GamePage
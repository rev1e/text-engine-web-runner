import { useState } from "react";
import validateGameData from "../utils/validateGameData";
import FileSelector from "./FileSelector/FileSelector";
import "./StartPage.css";

const GamePage = props => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const onFileSelected = async files => {
		if (files.length != 1) {
			setError("Select A File");
			return;
		}

		setLoading(true);
		setError(false);

		let gameData;
		try {
			gameData = validateGameData(await files[0].text());
		} catch (err) {
			console.error(err);
			setLoading(false);
			setError("Your Game Data Is Corrupted!");
		}

		props.onGameData(gameData);
	}

	return (
		<div className="center">
			<h1 className="site_title">Play Text Games In Your Browser</h1>
			<FileSelector text="Select Game File" accept=".tg" onFileSelected={onFileSelected} disabled={loading} />
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
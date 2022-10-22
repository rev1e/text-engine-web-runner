import { useRef } from "react";
import "./FileSelector.css";

const FileSelector = props => {
	const inputRef = useRef();

	const onFileSelected = e => {
		props.onFileSelected(e.target.files);
	}

	return (
		<>
			<button className="file_selector" onClick={() => inputRef.current.click()} disabled={props.disabled}>
				{ props.text ? props.text : "Select File" }
			</button>
			<input type="file"
				ref={inputRef} style={{display:"none"}}
				accept={ props.accept ? props.accept : "" }
				onChange={onFileSelected}
			/>
		</>
	)
}

export default FileSelector;
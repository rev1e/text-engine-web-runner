import { useRef } from "react";

const FileSelector = props => {
	const inputRef = useRef();

	const onFileSelected = e => {
		props.onFileSelected(e.target.files);
	}

	return (
		<>
			<button onClick={() => inputRef.current.click()}>
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
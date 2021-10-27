import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';

function App() {

	const onFileChange = (files) => {
		console.log(files);
	}

	return (
		<div className="containner">
			<div className="box">
				<div>
					<h2 className="header">
						Upload das musicas para o album
					</h2>
				</div>
				<div>
					<DropFileInput
						onFileChange={(files) => onFileChange(files)}
					/>
				</div>

			</div>
		</div>
	);
}

export default App;

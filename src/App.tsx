import { CustomButton, CustomInput, CustomModal } from 'components/shared';
import React, { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState(true);

	const handleCloseModal = () => setIsOpen(false);
	return (
		<div className="app">
			<CustomModal title="Edit user score" open={isOpen} onClose={handleCloseModal}>
				<CustomInput type="text" label="Name" />
				<CustomInput type="number" label="Points" />
				<CustomButton onClick={() => undefined} label="Save" />
			</CustomModal>
		</div>
	);
}

export default App;

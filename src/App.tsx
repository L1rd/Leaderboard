import { Header } from 'components/Header';
import { CustomButton, CustomInput, CustomModal } from 'components/shared';
import React, { useState } from 'react';
import './index.scss';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleCloseModal = () => setIsOpen(false);
	return (
		<div className="app">
			<Header />
			<CustomModal title="Edit user score" open={isOpen} onClose={handleCloseModal}>
				<CustomInput type="text" label="Name" />
				<CustomInput type="number" label="Points" />
				<CustomButton onClick={() => undefined} label="Save" />
			</CustomModal>
		</div>
	);
};

export default App;

import React, { ReactNode, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export interface ModalProps {
	title?: string;
	content: ReactNode;
	openDefault?: boolean;
}

type test = (props: ModalProps) => { modal: JSX.Element; handleOpenModal: () => unknown };

export const useModal: test = ({ title = '', content, openDefault = false }) => {
	const [isOpen, setIsOpen] = useState(openDefault);

	const handleClose = () => setIsOpen(false);

	const modal = (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogContent>
				<DialogTitle>
					{title}
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				{content}
			</DialogContent>
		</Dialog>
	);

	return { modal, handleOpenModal: () => setIsOpen(true) };
};

import React, { FC } from 'react';
import { Dialog, DialogContent, DialogProps, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps extends DialogProps {
	title: string;
	onClose: () => void;
}

export const CustomModal: FC<CustomModalProps> = props => {
	const { title, children, onClose, ...rest } = props;

	return (
		<Dialog {...rest} onClose={onClose}>
			<DialogContent>
				<DialogTitle>
					{title}
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				{children}
			</DialogContent>
		</Dialog>
	);
};

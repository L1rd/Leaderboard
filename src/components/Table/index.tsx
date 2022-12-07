import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CustomButton, CustomInput, CustomIconButton } from 'components/shared';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { TableUserItem } from 'components/TableUserItem';
import { useModal } from 'hooks/useModal';
import styles from './style.module.scss';

export const Table: FC = () => {
	const { modal, handleOpenModal } = useModal({
		title: 'Add new user',
		content: (
			<>
				<CustomInput placeholder="Name" />
				<CustomInput placeholder="Points" />
				<CustomButton variant="orange" label="Add new user" />
			</>
		),
	});
	
	return (
		<Box className={styles.table}>
			<Box className={styles.table__header}>
				<Typography variant="h2">Leaders table for this period</Typography>
				<Box className={styles.table__actions}>
					<CustomIconButton icon={<KeyboardDoubleArrowLeftIcon />} />
					<CustomIconButton icon={<KeyboardDoubleArrowRightIcon />} />
					<CustomButton label="New day" variant="orange" />
					<CustomButton
						label="Add new user"
						variant="blue"
						onClick={handleOpenModal}
						sx={{ marginLeft: '10px' }}
					/>
				</Box>
			</Box>
			{modal}
			<TableUserItem />
		</Box>
	);
};

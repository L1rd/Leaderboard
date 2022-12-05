import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CustomButton } from 'components/shared';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { TableUserItem } from 'components/TableUserItem';
import { CustomIconButton } from 'components/shared/CustomIconButton';
import styles from './style.module.scss';

export const Table: FC = () => (
	<Box className={styles.table}>
		<Box className={styles.table__header}>
			<Typography variant="h2">Leaders table for this period</Typography>
			<Box className={styles.table__actions}>
				<CustomIconButton icon={<KeyboardDoubleArrowLeftIcon />} />
				<CustomIconButton icon={<KeyboardDoubleArrowRightIcon />} />
				<CustomButton label="New day" variant='orange'/>
				<CustomButton label="Add new user" variant='blue' sx={{marginLeft: "10px"}}/>
			</Box>
		</Box>
		<TableUserItem />
	</Box>
);

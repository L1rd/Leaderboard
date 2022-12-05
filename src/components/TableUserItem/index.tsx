import { Box } from '@mui/material';
import { CustomAvatar } from 'components/shared';
import React, { FC } from 'react';
import avatarFisrt from 'assets/img/avatar1.svg';
import EditIcon from '@mui/icons-material/Edit';
import styles from './style.module.scss';

interface TableUserItemProps {
	onEdit?: () => unknown;
}

export const TableUserItem: FC<TableUserItemProps> = ({ onEdit }) => (
	<Box className={styles.user}>
		<Box className={styles.user__info}>
			<span className={styles.user__place}>1rd</span>
			<CustomAvatar src={avatarFisrt} />
			<span className={styles.user__score}>10</span>
			<span className={styles.user__name}>Petr</span>
		</Box>
		<Box className={styles.user__action}>
			<span className={styles.user__progress}>6 places</span>
			<EditIcon className={styles.user__edit} onClick={onEdit} />
		</Box>
	</Box>
);

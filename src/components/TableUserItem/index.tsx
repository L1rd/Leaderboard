import { Box } from '@mui/material';
import { CustomAvatar } from 'components/shared';
import React, { FC } from 'react';
import avatarFisrt from 'assets/img/avatar1.svg';
import EditIcon from '@mui/icons-material/Edit';
import styles from './style.module.scss';

interface TableUserItemProps {
	onEdit?: () => unknown;
	place: number;
	name: string;
	score: number;
}

export const TableUserItem: FC<TableUserItemProps> = ({ onEdit, place, name, score }) => (
	<Box className={styles.user}>
		<Box className={styles.user__info}>
			<span className={styles.user__place}>{place + 1}rd</span>
			<CustomAvatar src={avatarFisrt} />
			<span className={styles.user__score}>{score}</span>
			<span className={styles.user__name}>{name}</span>
		</Box>
		<Box className={styles.user__action}>
			<span className={styles.user__progress}>6 places</span>
			<EditIcon className={styles.user__edit} onClick={onEdit} />
		</Box>
	</Box>
);

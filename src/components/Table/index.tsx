import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { CustomButton, CustomInput, CustomModal } from 'components/shared';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { TableUserItem } from 'components/TableUserItem';
import { CustomIconButton } from 'components/shared/CustomIconButton';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, editUserInfo } from 'store/board-service/actions';
import { nanoid } from 'nanoid';
import styles from './style.module.scss';

const fetchUserData = async () => {
	try {
		const userResponse = await axios.get(`http://coding-test.cube19.io/frontend/v1/starting-state`);
	} catch (e) {
		console.log(e);
	}
};

interface TableConfig {
	isNewDayOpen: boolean;
	isNewUserOpen: boolean;
	isEditUserOpen: boolean;
}

export const Table: FC = () => {
	const dispatch = useDispatch();

	const [userId, setUserId] = useState('');

	const [userName, setUserName] = useState('');

	const [userScore, setUserScore] = useState(0);

	const [config, setConfig] = useState({
		isNewDayOpen: false,
		isNewUserOpen: false,
		isEditUserOpen: false,
	} as TableConfig);

	const users = useSelector((state: any) => state.board);

	const handleConfig = (prop: keyof TableConfig, value: boolean) => setConfig({ ...config, [prop]: value });

	const hadnleSetUserInfo = () => {
		dispatch(setUserInfo({ id: nanoid(), name: userName, score: userScore }));
		handleConfig('isNewUserOpen', false);
	};

	const hadnleEditUserInfo = () => {
		dispatch(editUserInfo({ id: userId, name: userName, score: userScore }));
		handleConfig('isEditUserOpen', false);
	};

	const handleSetUserID = (id: string) => {
		setUserId(id);
		handleConfig('isEditUserOpen', true);
	};

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
						onClick={() => handleConfig('isNewUserOpen', true)}
						variant="blue"
						sx={{ marginLeft: '10px' }}
					/>
				</Box>
			</Box>
			<CustomModal
				title="Add new user"
				open={config.isNewUserOpen}
				onClose={() => handleConfig('isNewUserOpen', false)}
			>
				<CustomInput placeholder="Name" onBlur={(e: any) => setUserName(e.target.value)} />
				<CustomInput placeholder="Points" onBlur={(e: any) => setUserScore(parseInt(e.target.value, 10))} />
				<CustomButton
					label="Add new user"
					variant="orange"
					onClick={hadnleSetUserInfo}
					sx={{ color: 'black' }}
				/>
			</CustomModal>
			<CustomModal
				title="Edit user"
				open={config.isEditUserOpen}
				onClose={() => handleConfig('isEditUserOpen', false)}
			>
				<CustomInput placeholder="Name" onBlur={(e: any) => setUserName(e.target.value)} />
				<CustomInput placeholder="Points" onBlur={(e: any) => setUserScore(e.target.value)} />
				<CustomButton label="Edit user" variant="orange" onClick={hadnleEditUserInfo} sx={{ color: 'black' }} />
			</CustomModal>
			<Box className={styles.table__list}>
				{users
					.sort((a: any, b: any) => (a.score > b.score ? -1 : 1))
					.map((item: any, index: any) => (
						<TableUserItem
							place={index}
							name={item.name}
							score={item.score}
							onEdit={() => handleSetUserID(item.id)}
						/>
					))}
			</Box>
		</Box>
	);
};

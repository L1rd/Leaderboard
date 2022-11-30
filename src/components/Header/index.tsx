import React from 'react';
import avatarFisrt from 'assets/img/avatar1.svg';
import avatarSecond from 'assets/img/avatar2.svg';
import avatarThird from 'assets/img/avatar3.svg';
import avatarFourth from 'assets/img/avatar4.svg';
import headerBackground from 'assets/img/header-img.svg';
import { TopUserItem } from 'components/TopUserItem';
import { Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { COLORS } from 'utils/constants/mui/colors';
import styles from './style.module.scss';

export const Header = () => (
	<Box>
		<Typography variant="h1" sx={{ margin: '23px 0 23px 15px' }}>
			<span className={styles.title}>Five</span> Leaderboard
		</Typography>
		<Box className={styles.header}>
			<Box>
				<Typography variant="h1" sx={{ color: `${COLORS.white}`, marginBottom: '9px' }}>
					All-time highest scorers
				</Typography>
				<p className={styles.header__subtitle}>You can be among the leaders already today</p>
				<Box className={styles.list}>
					<TopUserItem src={avatarFisrt} title="Petr" score="12" />
					<TopUserItem src={avatarSecond} title="Mary" score="11" />
					<TopUserItem src={avatarThird} title="Mark" score="11" />
					<TopUserItem src={avatarFourth} title="Rome" score="10" />
				</Box>
			</Box>
			<img className={styles.header__img} src={headerBackground} alt="img" />
		</Box>
	</Box>
);

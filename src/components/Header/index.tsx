import React from 'react';
import avatarFisrt from 'assets/img/avatar1.svg';
import avatarSecond from 'assets/img/avatar2.svg';
import avatarThird from 'assets/img/avatar3.svg';
import avatarFourth from 'assets/img/avatar4.svg';
import headerBackground from 'assets/img/header-img.svg';
import { TopUserItem } from 'components/TopUserItem';
import { Box } from '@material-ui/core';
import styles from './style.module.scss';

export const Header = () => (
	<Box>
		<h1 className={styles.title}>
			<span>Five</span> Leaderboard
		</h1>
		<Box className={styles.header}>
			<Box>
				<h2 className={styles.header__title}>All-time highest scorers</h2>
				<h3 className={styles.header__subtitle}>You can be among the leaders already today</h3>
				<Box className={styles.top_list}>
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

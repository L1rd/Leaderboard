import { makeStyles } from '@material-ui/styles';
import { CustomAvatar } from 'components/shared';
import React, { FC } from 'react';

const useStyles = makeStyles({
	avatar: {
		'&:first-child': {
			height: '59px',
			width: '60px',
		},
	},

	best: {
		marginRight: '6px',
		textAlign: 'center',
		'&:last-of-type': {
			marginRight: '0px',
		},
	},

	best_score: {
		fontWeight: '500' as 'bold',
		fontSize: '12px',
		lineHeight: '15px',
		color: '#efefef',
		marginTop: '6px',
	},
});

interface TopUserItemProps {
	src: string;
	title: string;
	score: string;
}

export const TopUserItem: FC<TopUserItemProps> = ({ src, title, score }) => {
	const classes = useStyles();

	return (
		<div className={classes.best}>
			<CustomAvatar src={src} className={classes.avatar} title={title} />
			<p className={classes.best_score}>
				{title} - {score}
			</p>
		</div>
	);
};

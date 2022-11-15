import { AvatarProps } from '@material-ui/core';
import { Avatar } from '@mui/material';
import React, { FC } from 'react';

export const CustomAvatar: FC<AvatarProps> = ({ src, title }) => (
	<Avatar variant="square" src={src} title={title} alt={title} />
);

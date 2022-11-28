import { AvatarProps } from '@material-ui/core';
import { Avatar } from '@mui/material';
import React, { FC } from 'react';

export const CustomAvatar: FC<AvatarProps> = ({ src, title, className }) => (
	<Avatar variant="rounded" className={className} src={src} title={title} alt={title} />
);

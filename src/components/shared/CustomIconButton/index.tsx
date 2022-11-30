import { IconButton } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface CustomIconButtonProps {
	className?: string;
	icon: ReactNode;
}

export const CustomIconButton: FC<CustomIconButtonProps> = ({ className, icon }) => (
	<IconButton className={className}>{icon}</IconButton>
);

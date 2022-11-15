import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { ButtonBaseProps } from '@mui/material';

interface CustomButtonProps extends ButtonBaseProps {
	label: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ onClick, label }) => <Button onClick={onClick}>{label}</Button>;

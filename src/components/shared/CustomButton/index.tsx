import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		orange: true;
		blue: true;
	}
}
interface CustomButtonProps extends ButtonProps {
	label: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ label, ...props }) => <Button {...props}>{label}</Button>;

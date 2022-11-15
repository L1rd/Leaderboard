import React, { FC } from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

export const CustomInput: FC<BaseTextFieldProps> = props => <TextField {...props} />;

import { createTheme } from '@mui/material';
import UploadBackgroundRight from 'assets/img/modal-background2.svg';
import UploadBackgroundLeft from 'assets/img/modal-background.svg';

export const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					width: '90px',
					height: '25px',
					color: 'white',
					background: '#F99746',
					boxShadow: '0px 2px 8px rgba(249, 151, 70,  0.04)',
					borderRadius: '10px',
					'&:hover': {
						color: '#F99746',
						border: '1px solid #F99746',
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					margin: '0 0 12px 0',
					'& label': {
						fontSize: '13px',
						lineHeight: '15px',
						top: 'inherit',
						bottom: '25px',
					},
					'& label.Mui-focused': {
						fontSize: '15px',
						color: 'blue',
						bottom: 'inherit',
						left: '3px',
					},
					'& .MuiInput-underline:after': {
						borderBottomColor: 'green',
					},
					'& .MuiOutlinedInput-root': {
						height: '34px',
						'& fieldset': {
							borderColor: 'rgba(3, 3, 39, 0.58)',
						},
						'&:hover fieldset': {
							boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
						},
						'&.Mui-focused fieldset': {
							boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
						},
					},
				},
			},
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					fontFamily: 'inherit',
					fontWeight: '600',
					fontSize: '22px',
					lineHeight: '27px',
					color: '#030327',
					marginBottom: '20px',
					padding: '0px 0px',
				},
			},
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '514px',
					height: '300px',
					border: '1px solid #dddddd',
					borderRadius: '10px',
					padding: '15px',
					background: `url(${UploadBackgroundRight}) 90% 100% no-repeat, url(${UploadBackgroundLeft}) center/cover no-repeat, #f6f6f6`,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: '10px',
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				container: {
					position: 'absolute',
					top: '5%',
					left: '27%',
					height: '380px',
				},
			},
		},
	},
});

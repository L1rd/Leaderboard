import { createTheme } from '@mui/material';
import UploadBackgroundRight from 'assets/img/modal-background2.svg';
import UploadBackgroundLeft from 'assets/img/modal-background.svg';
import { COLORS } from 'utils/constants/mui/colors';

export const theme = createTheme({
	typography: {
		h1: {
			fontFamily: 'inherit',
			fontWeight: 600,
			fontSize: '22px',
			lineHeight: '27px',
			color: `${COLORS.darkBlue}`,
		},
		h2: {
			fontFamily: 'inherit',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '22px',
			color: `${COLORS.darkBlue}`,
		},
	},

	components: {
		MuiButton: {
			variants: [
				{
				  props: { variant: 'orange' },
				  style: {					 
					border: `1px solid ${COLORS.orange}`,
					background: `${COLORS.orange}`,
					'&:hover': {
						color: `${COLORS.orange}`,
						background: "none",
					},
				  },
				},
				{
					props: { variant: 'blue' },
					style: {					 
						border: `1px solid ${COLORS.blue}`,
						background: `${COLORS.blue}`,
						"&:hover": {
							background: "none",
							color: `${COLORS.blue}`,
						}
					},
				 },
			 ],
			styleOverrides: {
				root: {
					fontFamily: "'Montserrat', sans-serif",
					fontStyle: 'normal',
					fontWeight: '600',
					fontSize: '10px',
					lineHeight: '12px',
					color: `${COLORS.white}`,
					height: '25px',
					padding: '6px 24px',
					minWidth: '0px',
					boxShadow: '0px 2px 8px rgba(249, 151, 70,  0.04)',
					borderRadius: '10px',					
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

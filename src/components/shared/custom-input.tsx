import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

interface ComponentTypes {
	onChange: any,
	type: string,
	placeholder: string,
}

const CustomTextField = styled(TextField)({
	marginBottom: "12px",
	"& label":{
		fontSize:"13px",
      lineHeight: "15px",
		top:"inherit",
		bottom: "25px"
	},
	'& label.Mui-focused': {
		fontSize:"15px",
		color: 'blue',
		bottom: "inherit",
		left: "3px"
	 },
	 '& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	 },
	 '& .MuiOutlinedInput-root': {
		height:"34px",
		'& fieldset': {
		  borderColor: 'rgba(3, 3, 39, 0.58)',
		},
		'&:hover fieldset': {
			boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
		},
		'&.Mui-focused fieldset': {
			boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
		},
	 },
})

export const CustomInput = ({onChange, type, placeholder }:ComponentTypes) => <CustomTextField type={type} label={placeholder} onChange={onChange} />
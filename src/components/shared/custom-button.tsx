import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomTypes {
	onClick: any,
	label: string,
}

const CustomButton = styled(Button)({
	width:"90px",
	height:"25px",
	color:"white",
	background: "#F99746",
	boxShadow: "0px 2px 8px rgba(249, 151, 70,  0.04)",
	borderRadius:"10px",
	"&:hover":{
		color: "#F99746",
		border: "1px solid #F99746"
	}
})

export const CustomButtonComponent = ({onClick, label}:CustomTypes) => <CustomButton onClick={onClick}>{label}</CustomButton>
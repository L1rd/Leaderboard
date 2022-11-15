import styles from './style.module.scss';
import { CustomInput } from '../custom-input';
import { CustomButtonComponent } from '../custom-button';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';

export const ModalWindow = () =>{
	const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const onChange = () =>{

	}

	const onClick = () =>{

	}
	
	return(
		<>
		<Modal open={open} onClose={handleClose}>
		  <Box className={styles.modal_window}>
			<h2 className={styles.modal_window_title}>Edit user score</h2>
			<CustomInput onChange={onChange} type="text" placeholder="Name"/>
			<CustomInput onChange={onChange} type="number" placeholder="Points"/>
			<CustomButtonComponent onClick={onClick} label="Save"/>
			</Box>
      </Modal>
		</>
	)
}
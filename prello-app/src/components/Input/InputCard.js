import React from 'react'

import { IconButton, InputBase } from '@mui/material'
import { Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';


const useStyle = makeStyles((theme)=>({
	card:{
		paddingBottom:"30px",
		margin: "12px",
	},
	input:{
		margin:"6px !important",
	},
	btnConfirm:{
		"&:hover":{
			backgroundColor:"#14ab00 !important",
			color:"#fff !important",
		}
	},
	confirm:{
		marginTop:"14px",
	}
}));

export default function InputCard({setOpen}) {
	const classes = useStyle();
  return (
	<div>
		<div>
			<Paper className={classes.card}>
				<InputBase multiline fullWidth
				inputProps={{
					className:classes.input,
				}}
				placeholder="Enter title of whis card..."/>
			</Paper>
		</div>
		<div className={classes.confirm}>
			<Button className={classes.btnConfirm} onClick={()=>setOpen(false)}
				sx ={{marginLeft:"12px",
						backgroundColor:"#c8c8c8 !important",
						color:"#000 !important",}}> 
					ADD CARD 
			</Button>

			<IconButton onClick={()=>setOpen(false)}>
				<CloseIcon/>
			</IconButton>
		</div>
	</div>

  )
}

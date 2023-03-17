import React, { useState } from 'react'

import { InputBase, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


const useStyle = makeStyles((theme)=>({
	editableContainer:{
		marginLeft:"16px",
		display:"flex",
	},
	editTitle:{
		flexGrow:1,
		fontSize:"20px !important",
		fontWeight:"bold !important",
	},
	input:{
		margin:"5px !important",
	"&:focus":{
		background:"#ddd",
	}

}
}));



export default function Title({title}) {
	const [open,setopen] = useState()
	const classes = useStyle();
  return (
	<div>
		{open ? (
		<div>
			<InputBase 
			value= {title}
			inputProps={{
				className:classes.input
			}}
			fullWidth
			/>
		</div>
		) : (
		<div className={classes.editableContainer}>
			<Typography 
				onClick = {()=> setopen (!open)}
				className={classes.editTitle}>
					{title}	
			</Typography>

			 <MoreHorizOutlinedIcon/>
		</div>
		)}
	</div>
  );
}


import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyle = makeStyles((theme)=>({
	card:{
		padding:"6px",
		margin:"12px"
	}
}))

export default function Card() {
const classes = useStyle();

  return (
	<div>
		<Paper className={classes.card}>Make breakfast</Paper>
	</div>
  )
}

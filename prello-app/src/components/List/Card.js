import { Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyle = makeStyles((theme)=>({
	card_container:{
		padding:"6px",
		margin:"12px"
	}
}))

export default function Card({ card }) {
const classes = useStyle();

  return (
	<div>
		<Paper className={classes.card_container}>{card.content}</Paper>
	</div>
  )
}

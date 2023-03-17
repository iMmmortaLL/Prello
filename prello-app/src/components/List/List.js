import React from "react";
import Title from "./Title";

import { Paper, CssBaseline} from "@mui/material";
import { makeStyles } from '@mui/styles';
import Card from "./Card";
import InputContainer from "../Input/InputContainer";



const useStyle = makeStyles((theme)=>({
	root:{
		width: "300px",
		background: "#DFE1E6 !important",
		margin: "18px !important",
	}
}))


export default function List({list}){
		const classes = useStyle();
	return(
		<div>
			<Paper elevation={6} className={classes.root}>
				<CssBaseline/>
					<Title title={list.title}/>
					{list.cards.map((card) =>(
						<Card key={card.id} card={card}/>
					))}
					<InputContainer/>
			</Paper>
		</div>
	)		
}
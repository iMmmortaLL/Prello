import { Collapse, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React ,{useState} from 'react'
import InputCard from './InputCard'


const useStyle = makeStyles((theme)=>({
root:{
    marginTop:"24px",
},
	addCard:{
		padding:"6px",
    margin:"6px",
    background:"#DFE1E6 !important",
    "&:hover":{
      background: "#c8c8c8 !important",
    },
	}
}))

export default function InputContainer() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
        <Collapse in = {open}> 
          <InputCard setOpen = {setOpen}/>
        </Collapse>

        <Collapse in = {!open}>
          <Paper className={classes.addCard} elevation ={0} onClick = {()=> setOpen(!open)}>
            <Typography>
                + Add Card
            </Typography>
          </Paper>
        </Collapse>
    </div>
  )
}

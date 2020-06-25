import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root1: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "20px",
        color: "#4A82AD",
        width: "100%",
        fontFamily: "Rockwell",
        minWidth: "88px"
    },
    root2: {
        maxWidth: "400px",
        width: "100%",

    },
});



export const InputLabel = ({ text, value, changepool, round, addValue }) => {
    const classes = useStyles();
    const date = {
        round: round,
        value: addValue

    }
    const changePool = () => {
        changepool(date)
    }
    return (
        <Grid item xs="8" sm="8" className={classes.root2} >
            <Button className={classes.root1} onClick={changePool} > + {addValue} $ </Button>
        </Grid>
    )
}
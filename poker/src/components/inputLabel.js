import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "20px",
        color: "#4A82AD",
        width: "100%",
        fontFamily: "Rockwell",
        minWidth: "88px"
    },
    root: {
        maxWidth: "400px",
        width: "100%",
    },
});

export const InputLabel = ({ text, value, changepool, round, addValue }) => {
    const classes = useStyles();
    const data = {
        round: round,
        value: addValue
    }
    const changePool = () => {
        changepool(data)
    }

    return (
        <Grid item xs="8" sm="8" className={classes.root} >
            <Button className={classes.button} onClick={changePool} > + {addValue} $ </Button>
        </Grid>
    )
}
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        width: "100%",
        fontFamily: "Rockwell"
    },
    textPool: {
        color: "#4A82AD",
    },
    textDebt: {
        color: "#B44B6A",
    },
    root: {
        maxWidth: "400px",
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",
    },
});

export const TextLabel = ({ text, value, value2 }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} >
            <Typography className={classes.text}> {text} </Typography>
            <Typography className={`${classes.text} ${classes.textPool}`}> {value} $ </Typography>
            <Typography className={`${classes.text} ${classes.textDebt}`}> {value2} </Typography>
        </Grid>
    )
}
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root1: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",

        width: "100%",
        fontFamily: "Rockwell"

    },
    root2: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        color: "#4A82AD",
        width: "100%",
        fontFamily: "Rockwell"
    },
    root3: {
        maxWidth: "400px",
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",
    },
    root4: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        color: "#B44B6A",
        width: "100%",
        fontFamily: "Rockwell"
    },
});



export const TextLabel = ({ text, value, value2, ico }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root3} >
            <Typography className={classes.root1}> {text} </Typography>
            <Typography className={classes.root2}> {value} $ </Typography>
            <Typography className={classes.root4}> {value2} </Typography>
        </Grid>
    )
}
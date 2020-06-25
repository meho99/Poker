import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        color: "#4A82AD",
        width: "100%",
        fontFamily: "Rockwell"
    },
});

export const Buton = ({ text, onClick, }) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} onClick={onClick} > {text} </Button>
    )
}
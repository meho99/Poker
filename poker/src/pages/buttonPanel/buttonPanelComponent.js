import React from "react"
import { makeStyles } from '@material-ui/core/styles';

import { Buton } from "../../components/button"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root1: {
        position: "fixed",
        right: "5%",
        backgroundColor: "#B3AA66",
        float: "left",
        top: "20%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        fontSize: "25px",
        width: "10%"

    },
    root2: {
        position: "fixed",
        right: "5%",
        backgroundColor: "#B3AA66",
        float: "left",
        top: "40%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        fontSize: "25px",
        width: "10%"

    },

});

export const ButtonPanelComponent = ({ list, addRound, round, changeButton, passButton }) => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid className={classes.root1}>
                < Buton text={list} addRound={addRound} changeButton={changeButton} round={round} />
            </Grid >
            <Grid className={classes.root2}>
                < Buton text={"PASS"} passButton={passButton} />
            </Grid >
        </Grid>
    )
}

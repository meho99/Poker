import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Buton } from "../../components/button"

const useStyles = makeStyles({
    button: {
        position: "fixed",
        right: "5%",
        backgroundColor: "#B3AA66",
        float: "left",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        fontSize: "25px",
        width: "10%"
    },
    buttonPlace: {
        top: "20%",
    },
    buttonPass: {
        top: "40%",
    }
});

export const ButtonPanelComponent = ({ list, ChangeRound, round, ChangeButton, PassButton }) => {
    const classes = useStyles();

    return (
        <Grid>
            <Grid className={`${classes.button} ${classes.buttonPlace}`}>
                <Buton
                    text={list}
                    ChangeRound={ChangeRound}
                    ChangeButton={ChangeButton}
                    round={round}
                />
            </Grid >
            <Grid className={`${classes.button} ${classes.buttonPass}`}>
                <Buton
                    text={"PASS"}
                    PassButton={PassButton}
                />
            </Grid >
        </Grid>
    )
}

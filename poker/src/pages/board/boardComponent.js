import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { CardsContainer } from "../cards/cardsContainer"

const useStyles = makeStyles({
    board: {
        textAlign: "center",
        position: "fixed",
        height: "60%",
        top: "20%",
        width: "60%",
        left: "20%",
        flexGrow: 1,
        flexWrap: "wrap",
        display: "flex",
        backgroundColor: "#B3AA66",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
    },
    cardsContainer: {
        textAlign: 'center',
        maxHeight: "33%",
        position: "relative",
    },
});

const DefaultGrid = ({ children, className }) => (
    <Grid xs="8" className={className}>{children}</Grid>
)


export const BoardComponent = ({ listPlayer2, listPlayer1, boardCards }) => {
    const classes = useStyles();

    return (
        <Grid
            justify="center"
            alignItems="center"
            xs="12" className={classes.board}
        >
            <DefaultGrid className={classes.cardsContainer}>
                <CardsContainer storeCards={listPlayer2} />
            </DefaultGrid>
            <DefaultGrid className={classes.cardsContainer} >
                <CardsContainer storeCards={boardCards} />
            </DefaultGrid>
            <DefaultGrid className={classes.cardsContainer}>
                <CardsContainer storeCards={listPlayer1} />
            </DefaultGrid>
        </Grid>

    )
}

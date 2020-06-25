import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Card } from "../../components/card"


const useStyles = makeStyles({
    root1: {
        textAlign: 'center',


    },
    root2: {
        margin: "1px",
        textAlign: 'center',



    },
});

export const CardsComponent = ({ list }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs="12" className={classes.root1}>
            {
                list.map((val, index) => (
                    <Grid xs="2"
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        className={classes.root2} >
                        <Card source={list[index]} />
                    </Grid>
                ))
            }

        </Grid>
    )
}

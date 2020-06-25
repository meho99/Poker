import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root2: {
        width: "90%",
        minWidth: "50px"
    }

});



export const Card = (source) => {
    const classes = useStyles();
    return (
        <Grid

            className={classes.root1}>
            <img className={classes.root2} src={source.source} alt="cardPicture" />
        </Grid>
    )
}
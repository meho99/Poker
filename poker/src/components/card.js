import React from "react"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    image: {
        width: "90%",
        minWidth: "50px"
    }
});

export const Card = (source) => {
    const classes = useStyles();

    return (
        <img className={classes.image} src={source.source} alt="cardPicture" />
    )
}
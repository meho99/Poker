import React from "react"
import Grid from '@material-ui/core/Grid';

import { Card } from "./card"

export const CardsComponent = ({ storeCards }) => {

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs="12">
            {
                storeCards.map(val => (
                    <Grid xs="2"
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Card source={val} />
                    </Grid>
                ))
            }
        </Grid>
    )
}
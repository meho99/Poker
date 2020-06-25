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
                storeCards.map((val, index) => (
                    <Grid xs="2"
                        key={index}
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
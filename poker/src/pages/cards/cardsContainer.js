import React from "react"
import { CardsComponent } from "./cardsComponent"





export const CardsContainer = (storeCards) => {
    return (

        <CardsComponent list={storeCards.storeCards} />

    )
}
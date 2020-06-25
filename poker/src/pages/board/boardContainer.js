import React from "react"
import { useSelector } from "react-redux"

import { BoardComponent } from "./boardComponent"

export const BoardContainer = () => {
    const listPlayer2 = useSelector(store => store.player2Cards)
    const listPlayer1 = useSelector(store => store.player1Cards)
    const boardCards = useSelector(store => store.boardCards)

    return (
        <BoardComponent
            listPlayer2={listPlayer2}
            listPlayer1={listPlayer1}
            boardCards={boardCards}
        />
    )
}
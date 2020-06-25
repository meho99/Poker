import React from 'react'
import { ButtonPanelContainer } from "./pages/buttonPanel/buttonPanelContainer"
import { BoardContainer } from "./pages/board/boardContainer"
import { BorderContainer } from "./pages/border/borderContainer"

export const App = () => {
    return (
        <div>
            <ButtonPanelContainer />
            <BoardContainer />
            <BorderContainer />
        </div>
    )
}

import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { BorderComponent } from "./borderComponent"
import { actions } from "../../store/actions"

const useChangePool = () => {
    const dispatch = useDispatch()
    const changePool = date => dispatch(actions.changePool(date))
    return changePool
}

export const BorderContainer = () => {
    const borderProps = {
        playerIconSrc1: useSelector(store => store.playersIco[0]),
        playerIconSrc2: useSelector(store => store.playersIco[1]),
        player1Cash: useSelector(store => store.playerCash[0]),
        player2Cash: useSelector(store => store.playerCash[1]),
        player1Debt: `- ${useSelector(store => store.playerMinus[0])} $`,
        player2Debt: `- ${useSelector(store => store.playerMinus[1])} $`,
        pool: useSelector(store => store.pool),
        round: useSelector(store => store.round),
        inputNames: useSelector(store => store.inputNames),
    }
    const changePool = useChangePool()

    return <BorderComponent {...borderProps} changePool={changePool} />
}

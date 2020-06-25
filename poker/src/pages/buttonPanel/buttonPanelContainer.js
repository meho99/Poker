import React from "react"
import { ButtonPanelComponent } from "./buttonPanelComponent"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../store/actions"

const useChangeRound = () => {
    const dispatch = useDispatch()
    const changeRound = round => dispatch(actions.changeRound(round))
    return changeRound
}

const useChangeButton = () => {
    const dispatch = useDispatch()
    const changeButton = round => dispatch(actions.changeButton(round))
    return changeButton
}

const usePassButton = () => {
    const dispatch = useDispatch()
    const passButton = () => dispatch(actions.passRound())
    return passButton
}

export const ButtonPanelContainer = () => {
    const list = useSelector(store => store.buttonsNames)
    const round = useSelector(store => store.round)
    const ChangeRound = useChangeRound()
    const ChangeButton = useChangeButton()
    const PassButton = usePassButton()
    return (
        <ButtonPanelComponent
            list={list}
            addRound={ChangeRound}
            changeButton={ChangeButton}
            passButton={PassButton}
            round={round}
        />
    )
}
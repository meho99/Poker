import React from "react"
import { useSelector } from "react-redux"

import { ButtonPanelComponent } from "./buttonPanelComponent"
import { useChangeRound, useChangeButton, usePassButton } from "./buttonPanelHooks"

export const ButtonPanelContainer = () => {
    const reduxProps = {
        list: useSelector(store => store.buttonsNames),
        round: useSelector(store => store.round)
    }
    const hooksProps = {
        ChangeRound: useChangeRound(),
        ChangeButton: useChangeButton(),
        PassButton: usePassButton()
    }

    return (
        <ButtonPanelComponent
            {...reduxProps}
            {...hooksProps}
        />
    )
}
import { useDispatch } from "react-redux"
import { actions } from "../../store/actions"

export const useChangeRound = () => {
    const dispatch = useDispatch()
    const changeRound = round => dispatch(actions.changeRound(round))
    return changeRound
}

export const useChangeButton = () => {
    const dispatch = useDispatch()
    const changeButton = round => dispatch(actions.changeButton(round))
    return changeButton
}

export const usePassButton = () => {
    const dispatch = useDispatch()
    const passButton = () => dispatch(actions.passRound())
    return passButton
}
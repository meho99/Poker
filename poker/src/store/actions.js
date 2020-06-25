import { createAction } from 'redux-actions'

import { ACTIONS } from './consts'

export const actions = {
    changeButton: createAction(ACTIONS.CHANGE_BUTTON, data => data),
    changeRound: createAction(ACTIONS.CHANGE_ROUND, data => data),
    changePool: createAction(ACTIONS.CHANGE_POOL, data => data),
    passRound: createAction(ACTIONS.PASS_ROUND, data => data),
}
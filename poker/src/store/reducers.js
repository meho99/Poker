import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'
import { addStore } from "./addStoreItems"
import { addRandom } from "./addRandom"

const store = addStore()
const random = addRandom()

const defaultState = {
    cards: store.cards,

    boardCards: store.board,
    player1Cards: store.player1,
    player2Cards: store.player2,

    playersIco: store.ico,
    playerCash: [1000, 1000],
    playerMinus: [0, 0],
    pool: 0,

    buttonsColors: ["../../textures/ringBlue.png"],
    buttonsNames: store.buttons,
    round: 1,
    inputNames: [5, 20, 50, 100, 300, 500],

    randPlayer: random.player,
    randBot: random.bot,
    randBorad: random.board,
    won: random.won,
}

const poolRounds = [2, 3, 4, 5]
const buttonsName = ["PLACE", "GO", "GO", "GO", "GO", "NEXT"]

const newRound = (draft) => {
    if (draft.won === 0) {
        draft.playerCash[0] += draft.pool / 2
        draft.playerCash[1] += draft.pool / 2
    }
    else if (draft.won === 1) {
        draft.playerCash[0] += draft.pool
    }
    else if (draft.won === 2) {
        draft.playerCash[1] += draft.pool
    }
    draft.playerMinus[0] = 0
    draft.playerMinus[1] = 0
    const random = addRandom()
    draft.randPlayer = random.player
    draft.randBot = random.bot
    draft.randBorad = random.board
    draft.boardCards = store.board
    draft.player1Cards = store.player1
    draft.player2Cards = store.player2
    draft.won = random.won
    draft.pool = 0
}

const samePool = (draft) => {
    if (draft.playerMinus[0] > draft.playerMinus[1]) {
        const difference = draft.playerMinus[0] - draft.playerMinus[1]
        draft.playerCash[1] -= difference
        draft.playerMinus[1] += difference
        draft.pool += difference
    }
    else if (draft.playerMinus[1] > draft.playerMinus[0]) {
        const difference = draft.playerMinus[1] - draft.playerMinus[0]
        draft.playerCash[0] -= difference
        draft.playerMinus[0] += difference
        draft.pool += difference
    }
}

const addPool = (draft, player, prize) => {
    draft.pool += prize
    draft.playerCash[player] -= prize
    draft.playerMinus[player] += prize
}

const botPoolAdd = (draft) => {
    let prize = Math.floor(Math.random() * 15);
    prize *= 5
    addPool(draft, 1, prize)
}

export const reducer = handleActions({
    [ACTIONS.CHANGE_BUTTON]: (state, { payload }) =>
        produce(state, draft => {
            draft.buttonsNames = buttonsName[payload]
            samePool(draft)

            switch (payload) {
                case 0:
                    newRound(draft)
                    break;
                case 1:
                    draft.player1Cards = draft.randPlayer
                    addPool(draft, 0, 50)
                    addPool(draft, 1, 50)
                    break;
                case 2:
                    draft.boardCards[0] = draft.randBorad[0]
                    draft.boardCards[1] = draft.randBorad[1]
                    draft.boardCards[2] = draft.randBorad[2]
                    botPoolAdd(draft)
                    break;
                case 3:
                    draft.boardCards[3] = draft.randBorad[3]
                    botPoolAdd(draft)
                    break;
                case 4:
                    draft.boardCards[4] = draft.randBorad[4]
                    botPoolAdd(draft)
                    break;
                case 5:
                    draft.player2Cards = draft.randBot
                    break;
                default:
                // do nothing
            }
        }),
    [ACTIONS.CHANGE_ROUND]: (state, { payload }) =>
        produce(state, draft => {
            if (payload !== 5) {
                draft.round = payload + 1
            }
            else { draft.round = 0 }
        }),

    [ACTIONS.CHANGE_POOL]: (state, { payload }) =>
        produce(state, draft => {
            if (poolRounds.includes(payload.round)) {
                addPool(draft, 0, payload.value)
            }
        }),

    [ACTIONS.PASS_ROUND]: (state,) =>
        produce(state, draft => {
            draft.round = 1
            draft.buttonsNames = buttonsName[0]
            draft.playerCash[1] += draft.pool
            draft.playerMinus[0] = 0
            draft.playerMinus[1] = 0
            const random = addRandom()
            draft.randPlayer = random.player
            draft.randBot = random.bot
            draft.randBorad = random.board
            draft.boardCards = store.board
            draft.player1Cards = store.player1
            draft.player2Cards = store.player2
            draft.won = random.won
            draft.pool = 0
        }),
}, defaultState)

import { generateCardsPath } from './addStoreItems'
import { whoWon } from './whoWon'

const CardTypes = [
    "Spades",
    "Clubs",
    "Diamonds",
    "Hearts"
]

const FiguresPower = {
    PAIR: 1,
    TWO_PAIRS: 2,
    THREE_OF_KIND: 3,
    STREIGH: 4,
    FLUSH: 5,
    FULL_HOUSE: 6,
    FOUR_OF_KIND: 7,
}

export const addRandom = () => {
    const player = []
    const bot = []
    const board = []
    let repeat = 0

    let randomCard = [[], [], [], [], [], [], [], [], []]

    for (let i = 0; i < 9; i++) {
        const randomType = CardTypes[Math.floor(Math.random() * 4)];
        const randomFigure = Math.floor(Math.random() * 13);
        for (let j = 0; j < randomCard.length; j++) {
            if (randomType === randomCard[j][0] && randomFigure === randomCard[j][1]) {
                repeat = 1
                j = 10
            }
            else { repeat = 0 }
        }
        if (repeat === 0) {
            randomCard[i][0] = randomType
            randomCard[i][1] = randomFigure
        }
        else { i-- }
    }

    for (let i = 0; i < 9; i++) {
        const x = randomCard[i][0]
        if (i >= 0 && i < 2) {
            player[i] = generateCardsPath(`${x}.${randomCard[i][1]}.png`)
        }
        else if (i >= 2 && i < 4) {
            bot[i - 2] = generateCardsPath(`${x}.${randomCard[i][1]}.png`) // BOT ?
        }
        else if (i >= 4 && i < 9) {
            board[i - 4] = generateCardsPath(`${x}.${randomCard[i][1]}.png`)
        }
    }

    const commonCards = [
        { type: randomCard[4][0], card: randomCard[4][1] },
        { type: randomCard[5][0], card: randomCard[5][1] },
        { type: randomCard[6][0], card: randomCard[6][1] },
        { type: randomCard[7][0], card: randomCard[7][1] },
        { type: randomCard[8][0], card: randomCard[8][1] }
    ]

    const player1 = [
        { type: randomCard[0][0], card: randomCard[0][1] },
        { type: randomCard[1][0], card: randomCard[1][1] },
        ...commonCards
    ]

    const player2 = [
        { type: randomCard[2][0], card: randomCard[2][1] },
        { type: randomCard[3][0], card: randomCard[3][1] },
        ...commonCards
    ]

    const figure1 = checkFigures(player1)
    const figure2 = checkFigures(player2)
    const won = whoWon(figure1, figure2, player1, player2)

    const random = {
        won: won,
        player: player,
        bot: bot,
        board: board,
    }
    return random
}


const handPush = (hand, repeatedFigures, power, handLength, fig1, fig2) => {
    hand = []
    hand[0] = power
    if (handLength === 2) {
        hand[1] = repeatedFigures[fig1]
    }
    else if (handLength === 3) {
        hand[2] = repeatedFigures[fig2]
    }
    return hand
}

const checkFigures = (player) => {
    const repeatedCards = []
    let hand = []
    let pom = 0

    const cardsNumbers = player.map(item => item.card)

    for (let l = 0; l < 7; l++) {
        for (let j = 0; j < 6; j++) {
            if (cardsNumbers[j] > cardsNumbers[j + 1]) {
                pom = cardsNumbers[j + 1]
                cardsNumbers[j + 1] = cardsNumbers[j]
                cardsNumbers[j] = pom
            }
        }
    }

    for (let k = 0; k < 7; k++) {
        if (cardsNumbers[k] === cardsNumbers[k + 1]) {
            k++
            if (cardsNumbers[k] === cardsNumbers[k + 1]) {
                k++
                if (cardsNumbers[k] === cardsNumbers[k + 1]) {
                    k++
                    repeatedCards.push({ quantity: 4, figure: cardsNumbers[k] })
                }
                else {
                    repeatedCards.push({ quantity: 4, figure: cardsNumbers[k] })
                }
            }
            else {
                repeatedCards.push({ quantity: 2, figure: cardsNumbers[k] })
            }
        }
    }

    const repeatedFigures = repeatedCards.map(({ figure }) => figure)

    if (repeatedCards.length === 1) { //------------------------------------------ PARA
        if (repeatedCards[0].quantity === 2) {
            hand = handPush(hand, repeatedFigures, FiguresPower.PAIR, 2, 0, 0)
        }
    }
    else if (repeatedCards.length === 2) {  //--------------------------------- DWIE PARY
        if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 2) {
            hand = handPush(hand, repeatedFigures, FiguresPower.TWO_PAIRS, 3, 0, 1)
        }
    }
    else if (repeatedCards.length === 3) {
        const handLength = 3
        if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 2 && repeatedCards[2].quantity === 2) {
            if (repeatedCards[0].figure < repeatedCards[1].figure) {
                if (repeatedCards[0].figure < repeatedCards[2].figure) {
                    hand = handPush(hand, repeatedFigures, FiguresPower.TWO_PAIRS, handLength, 1, 2)
                }
            }
            else {
                if (repeatedCards[1].figure < repeatedCards[2].figure) {
                    hand = handPush(hand, repeatedFigures, FiguresPower.TWO_PAIRS, handLength, 0, 2)
                }
                else {
                    hand = handPush(hand, repeatedFigures, FiguresPower.TWO_PAIRS, handLength, 0, 1)
                }
            }
        }
    }
    if (repeatedCards.length === 1) { //---------------------------------------- TROJKA
        if (repeatedCards[0].quantity === 3) {
            hand = handPush(hand, repeatedFigures, FiguresPower.THREE_OF_KIND, 2, 0, 0)
        }
    }
    else if (repeatedCards.length === 2) {
        if (repeatedCards[0].quantity === 3 && repeatedCards[1].quantity === 3) {
            if (repeatedCards[0].figure > repeatedCards[1].figure) {
                hand = handPush(hand, repeatedFigures, FiguresPower.THREE_OF_KIND, 2, 0, 0)
            }
            else {
                hand = handPush(hand, repeatedFigures, FiguresPower.THREE_OF_KIND, 2, 1, 0)
            }
        }
    }
    let street = 0 //------------------------------------------------- STREET
    for (let i = 0; i < 3; i++) {
        street = 0
        for (let j = 0; j < 5; j++) {
            let nextCard = cardsNumbers[j + i] + 1
            let nexterCard = cardsNumbers[j + i + 1]
            if (nextCard === nexterCard) {
                street++
                if (street === 4) {
                    hand = handPush(hand, repeatedFigures, FiguresPower.STREIGH, 1, 0, 0)
                    hand[1] = cardsNumbers[j + i + 1]
                }
            }
            else {
                if (nextCard !== (nexterCard + 1)) {
                    j = 5
                }
            }
        }
    }
    let color = [0, 0, 0, 0] //----------------------------------------- KOLOR
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            if (player[i].type === j) {
                color[j]++
                if (color[j] === 5) {
                    hand = handPush(hand, repeatedFigures, FiguresPower.FLUSH, 1, 0, 0)
                }
            }
        }
    }
    if (repeatedCards.length === 2) { //----------------------------------------------- FULL
        if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 3) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 1, 0)
        }
        else if (repeatedCards[0].quantity === 3 && repeatedCards[1].quantity === 2) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 0, 1)
        }
    }
    if (repeatedCards.length === 3) {
        if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 2 && repeatedCards[2].quantity === 3) {
            if (repeatedCards[0].figure > repeatedCards[1].figure) {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 2, 0)
            }
            else {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 2, 1)
            }
        }
        else if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 3 && repeatedCards[2].quantity === 2) {
            if (repeatedCards[0].figure > repeatedCards[2].figure) {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 1, 0)
            }
            else {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 1, 2)
            }
        }
        else if (repeatedCards[0].quantity === 3 && repeatedCards[1].quantity === 2 && repeatedCards[2].quantity === 2) {
            if (repeatedCards[1].figure > repeatedCards[2].figure) {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 0, 1)
            }
            else {
                hand = handPush(hand, repeatedFigures, FiguresPower.FULL_HOUSE, 3, 0, 2)
            }
        }
    }
    if (repeatedCards.length === 1) { //----------------------------------------------- KARETA
        if (repeatedCards[0].quantity === 4) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FOUR_OF_KIND, 2, 0, 0)
        }
    }
    else if (repeatedCards.length === 2) {
        if (repeatedCards[0].quantity === 4 && repeatedCards[1].quantity === 2) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FOUR_OF_KIND, 2, 0, 0)
        }
        else if (repeatedCards[0].quantity === 2 && repeatedCards[1].quantity === 4) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FOUR_OF_KIND, 2, 1, 0)
        }
        else if (repeatedCards[0].quantity === 4 && repeatedCards[1].quantity === 3) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FOUR_OF_KIND, 2, 0, 0)
        }
        if (repeatedCards[0].quantity === 3 && repeatedCards[1] === 4) {
            hand = handPush(hand, repeatedFigures, FiguresPower.FOUR_OF_KIND, 2, 1, 0)
        }
    }
    return hand
}

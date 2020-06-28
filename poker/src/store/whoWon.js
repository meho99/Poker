const ifSame = (player1Card1, player1Card2, player2Card1, player2Card2, won) => {

    let betterCardPlayer1
    let worstCardPlayer1
    let betterCardPlayer2
    let worstCardPlayer2

    if (player1Card1 > player1Card2) {
        betterCardPlayer1 = player1Card1
        worstCardPlayer1 = player1Card2
    }
    else if (player1Card1 < player1Card2) {
        betterCardPlayer1 = player1Card2
        worstCardPlayer1 = player1Card1
    }
    if (player2Card1 > player2Card2) {
        betterCardPlayer2 = player2Card1
        worstCardPlayer2 = player2Card2
    }
    else if (player2Card1 < player2Card2) {
        betterCardPlayer2 = player2Card2
        worstCardPlayer2 = player2Card1
    }

    if (player1Card1 === player1Card2) {
        betterCardPlayer1 = player1Card1
        worstCardPlayer1 = player1Card2
    }
    if (player2Card1 === player2Card2) {
        betterCardPlayer2 = player2Card1
        worstCardPlayer2 = player2Card2
    }

    if (betterCardPlayer1 > betterCardPlayer2) {
        won = 1
    }
    else if (betterCardPlayer1 < betterCardPlayer2) {
        won = 2
    }
    else if (betterCardPlayer1 === betterCardPlayer2) {
        if (worstCardPlayer1 > worstCardPlayer2) {
            won = 1
        }
        else if (worstCardPlayer1 < worstCardPlayer2) {
            won = 2
        }
        else if (worstCardPlayer1 === worstCardPlayer2) {
            won = 0
        }
    }
    return won
}

export const whoWon = (figure1, figure2, player1, player2) => {
    let won = 0
    const player1Card1 = player1[0].card
    const player1Card2 = player1[1].card
    const player2Card1 = player2[0].card
    const player2Card2 = player2[1].card
    const player1Figure1 = figure1[1]
    const player1Figure2 = figure1[2]
    const player2Figure1 = figure2[1]
    const player2Figure2 = figure2[2]

    if (figure1[0] > figure2[0]) { //------------ kto wygral
        won = 1
    }
    else if (figure1[0] < figure2[0]) {
        won = 2
    }
    else if (figure1.length === 0 && figure2.length !== 0) {
        won = 2
    }
    else if (figure2.length === 0 && figure1.length !== 0) {
        won = 1
    }
    else if (figure1.length === 0 && figure2.length === 0) {
        won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
    }
    else if (figure1[0] === figure2[0]) {//---------------------- takie same figury
        if (figure1[0] === 1) {  //----------------------------- para
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {
                won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
            }
        }
        else if (figure1[0] === 2) {  //------------------------- dwie pary

            if (player1Figure2 > player2Figure2) {
                won = 1
            }
            else if (player1Figure2 < player2Figure2) {
                won = 2
            }
            else if (player1Figure2 === player2Figure2) {
                if (player1Figure1 > player2Figure1) {
                    won = 1
                }
                else if (player1Figure1 < player2Figure1) {
                    won = 2
                }
                else if (player1Figure1 === player2Figure1) {
                    won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
                }
            }
        }
        else if (figure1[0] === 3) {  //-----------------------------trojka
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {
                won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
            }
        }
        else if (figure1[0] === 4) {  //------------------------------street
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {
                won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
            }
        }
        else if (figure1[0] === 5) {  //------------------------------kolor
            won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
        }
        else if (figure1[0] === 6) {  //------------------------------ full

            if (player1Figure1 > player2Figure1) {
                won = 1
            }
            else if (player1Figure1 < player2Figure1) {
                won = 2
            }
            else if (player1Figure1 === player2Figure1) {
                if (player1Figure2 > player2Figure2) {
                    won = 1
                }
                else if (player1Figure2 < player2Figure2) {
                    won = 2
                }
                else if (player1Figure2 === player2Figure2) {
                    won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
                }
            }
        }
        else if (figure1[0] === 7) {  //--------------------------------kareta
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {
                won = ifSame(player1Card1, player1Card2, player2Card1, player2Card2, won)
            }
        }
    }
    return won
}
export const addRandom = () => {
    let player = []
    let bot = []
    let board = []
    let won = 0

    let repeat = 0
    let x = 0;
    let tab = [[], [], [], [], [], [], [], [], []]
    let tab2 = []
    for (let i = 0; i < 9; i++) {
        tab2[0] = Math.floor(Math.random() * 4);
        tab2[1] = Math.floor(Math.random() * 13);
        for (let j = 0; j < tab.length; j++) {
            if (tab2[0] === tab[j][0] && tab2[1] === tab[j][1]) {
                repeat = 1
                j = 10
            }
            else { repeat = 0 }
        }
        if (repeat === 0) {
            tab[i][0] = tab2[0]
            tab[i][1] = tab2[1]
        }
        else { i-- }
    }

    for (let i = 0; i < 9; i++) {
        if (tab[i][0] === 0) {
            x = "Spades"
        }
        else if (tab[i][0] === 1) {
            x = "Clubs"
        }
        else if (tab[i][0] === 2) {
            x = "Diamonds"
        }
        else if (tab[i][0] === 3) {
            x = "Hearts"
        }
        if (i >= 0 && i < 2) {
            player[i] = "../../cards/" + x + "." + tab[i][1] + ".png"
        }
        else if (i >= 2 && i < 4) {
            bot[i - 2] = "../../cards/" + x + "." + tab[i][1] + ".png"

        }
        else if (i >= 4 && i < 9) {
            board[i - 4] = "../../cards/" + x + "." + tab[i][1] + ".png"

        }
    }

    let player1 = [
        [tab[0][0], tab[0][1]],
        [tab[1][0], tab[1][1]],
        [tab[4][0], tab[4][1]],
        [tab[5][0], tab[5][1]],
        [tab[6][0], tab[6][1]],
        [tab[7][0], tab[7][1]],
        [tab[8][0], tab[8][1]]
    ]

    let player2 = [
        [tab[2][0], tab[2][1]],
        [tab[3][0], tab[3][1]],
        [tab[4][0], tab[4][1]],
        [tab[5][0], tab[5][1]],
        [tab[6][0], tab[6][1]],
        [tab[7][0], tab[7][1]],
        [tab[8][0], tab[8][1]]
    ]

    let p1 = player1[0][1]
    let p2 = player1[1][1]
    let p3 = player2[0][1]
    let p4 = player2[1][1]


    let figure1 = checkFigures(player1)
    let figure2 = checkFigures(player2)


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
        won = ifSame(p1, p2, p3, p4, won)
    }
    else if (figure1[0] === figure2[0]) {//---------------------- takie same figury
        if (figure1[0] === 1) {  //----------------para
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {//------------ takie same pary
                won = ifSame(p1, p2, p3, p4, won)
            }
        }
        else if (figure1[0] === 2) {  //---------------- dwie pary
            let f1 = figure1[1]
            let f2 = figure1[2]
            let f3 = figure2[1]
            let f4 = figure2[2]
            if (f2 > f4) {
                won = 1
            }
            else if (f2 < f4) {
                won = 2
            }
            else if (f2 === f4) {
                if (f1 > f3) {
                    won = 1
                }
                else if (f1 < f3) {
                    won = 2
                }
                else if (f1 === f3) { //-------------- takie same dwie pary
                    won = ifSame(p1, p2, p3, p4, won)
                }
            }
        }
        else if (figure1[0] === 3) {  //----------------trojka
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {//------------ takie same trojki
                won = ifSame(p1, p2, p3, p4, won)
            }
        }
        else if (figure1[0] === 4) {  //----------------street
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {//------------ takie same streety
                won = ifSame(p1, p2, p3, p4, won)
            }
        }
        else if (figure1[0] === 5) {  //----------------kolor
            won = ifSame(p1, p2, p3, p4, won)
        }
        else if (figure1[0] === 6) {  //---------------- full
            let f1 = figure1[1]
            let f2 = figure1[2]
            let f3 = figure2[1]
            let f4 = figure2[2]
            if (f1 > f3) {
                won = 1
            }
            else if (f1 < f3) {
                won = 2
            }
            else if (f1 === f3) {
                if (f2 > f4) {
                    won = 1
                }
                else if (f2 < f4) {
                    won = 2
                }
                else if (f2 === f4) { //-------------- taki sam full
                    won = ifSame(p1, p2, p3, p4, won)
                }
            }
        }
        else if (figure1[0] === 7) {  //----------------kareta
            if (figure1[1] > figure2[1]) {
                won = 1
            }
            else if (figure1[1] < figure2[1]) {
                won = 2
            }
            else if (figure1[1] === figure2[1]) {//------------ taka sama kareta
                won = ifSame(p1, p2, p3, p4, won)
            }
        }
    }



    const random = {
        won: won,
        player: player,
        bot: bot,
        board: board,
    }


    return random
}










const ifSame = (p1, p2, p3, p4, won) => {
    let w1
    let w2
    let w3
    let w4
    if (p1 > p2) {
        w1 = p1
        w2 = p2
    }
    else if (p1 < p2) {
        w1 = p2
        w2 = p1
    }
    if (p3 > p4) {
        w3 = p3
        w4 = p4
    }
    else if (p3 < p4) {
        w3 = p4
        w4 = p3
    }

    if (p1 === p2) {
        w1 = p1
        w2 = p2
    }
    if (p3 === p4) {
        w3 = p3
        w4 = p4
    }


    if (w1 > w3) {
        won = 1
    }
    else if (w1 < w3) {
        won = 2
    }
    else if (w1 === w3) {
        if (w2 > w4) {
            won = 1
        }
        else if (w2 < w4) {
            won = 2
        }
        else if (w2 === w4) {
            won = 0
        }
    }

    return won
}






























const checkFigures = (player) => {
    let cardsNumbers = []
    for (let i = 0; i < 7; i++) {
        cardsNumbers.push(player[i][1])
    }


    let pom = 0
    for (let l = 0; l < 7; l++) {
        for (let j = 0; j < 6; j++) {
            if (cardsNumbers[j] > cardsNumbers[j + 1]) {
                pom = cardsNumbers[j + 1]
                cardsNumbers[j + 1] = cardsNumbers[j]
                cardsNumbers[j] = pom
            }
        }
    }


    let pow = []
    let fig = []

    let hand = []

    for (let k = 0; k < 7; k++) {
        if (cardsNumbers[k] === cardsNumbers[k + 1]) {
            k++
            if (cardsNumbers[k] === cardsNumbers[k + 1]) {
                k++
                if (cardsNumbers[k] === cardsNumbers[k + 1]) {
                    k++
                    pow.push(4)
                    fig.push(cardsNumbers[k])
                }
                else {
                    pow.push(3)
                    fig.push(cardsNumbers[k])
                }
            }
            else {
                pow.push(2)
                fig.push(cardsNumbers[k])
            }
        }

    }


    if (pow.length === 1) { //---------------------------------- PARA
        if (pow[0] === 2) {
            hand = []
            hand[0] = 1
            hand[1] = fig[0]
        }
    }

    else if (pow.length === 2) {  //----------------------------- PARA PARA
        if (pow[0] === 2 && pow[1] === 2) {
            hand = []
            hand[0] = 2
            hand[1] = fig[0]
            hand[2] = fig[1]
        }
    }
    else if (pow.length === 3) {
        if (pow[0] === 2 && pow[1] === 2 && pow[2] === 2) {
            hand = []
            if (fig[0] < fig[1]) {
                if (fig[0] < fig[2]) {
                    hand[0] = 2
                    hand[1] = fig[1]
                    hand[2] = fig[2]
                }
            }
            else {
                if (fig[1] < fig[2]) {
                    hand[0] = 2
                    hand[1] = fig[0]
                    hand[2] = fig[2]
                }
                else {
                    hand[0] = 2
                    hand[1] = fig[0]
                    hand[2] = fig[1]
                }
            }
        }
    }

    if (pow.length === 1) { //---------------------- TROJKA
        if (pow[0] === 3) {
            hand = []
            hand[0] = 3
            hand[1] = fig[0]
        }
    }
    else if (pow.length === 2) {
        if (pow[0] === 3 && pow[1] === 3) {
            if (fig[0] > fig[1]) {
                hand = []
                hand[0] = 3
                hand[1] = fig[0]
            }
            else {
                hand = []
                hand[0] = 3
                hand[1] = fig[1]
            }
        }
    }

    //------------------------------------------------- STREET
    let street = 0
    for (let i = 0; i < 3; i++) {
        street = 0
        for (let j = 0; j < 5; j++) {
            let pom1 = j + i
            let pom3 = cardsNumbers[pom1] + 1
            let pom2 = j + i + 1
            let pom4 = cardsNumbers[pom2]
            if (pom3 === pom4) {
                street++
                if (street === 4) {
                    hand = []
                    hand[0] = 4
                    hand[1] = cardsNumbers[j + i + 1]
                }
            }
            else {
                if (pom3 !== (pom4 + 1)) {
                    j = 5
                }

            }
        }

    }
    //console.log(cardsNumbers)
    //console.log(hand)

    //---------------------------------------------- KOLOR
    let color = [0, 0, 0, 0]
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 4; j++) {
            if (player[i][0] === j) {
                color[j]++
                if (color[j] === 5) {
                    hand = []
                    hand[0] = 5
                }
            }
        }


    }




    //----------------------------------------------- FULL
    if (pow.length === 2) {
        if (pow[0] === 2 && pow[1] === 3) {
            hand = []
            hand[0] = 6
            hand[1] = fig[1]
            hand[2] = fig[0]
        }
        else if (pow[0] === 3 && pow[1] === 2) {
            hand = []
            hand[0] = 6
            hand[1] = fig[0]
            hand[2] = fig[1]
        }
    }

    if (pow[0] === 2 && pow[1] === 2 && pow[2] === 3) {
        if (fig[0] > fig[1]) {
            hand = []
            hand[0] = 6
            hand[1] = fig[2]
            hand[2] = fig[0]
        }
        else {
            hand = []
            hand[0] = 6
            hand[1] = fig[2]
            hand[2] = fig[1]
        }
    }
    else if (pow[0] === 2 && pow[1] === 3 && pow[2] === 2) {
        if (fig[0] > fig[2]) {
            hand = []
            hand[0] = 6
            hand[1] = fig[1]
            hand[2] = fig[0]
        }
        else {
            hand = []
            hand[0] = 6
            hand[1] = fig[1]
            hand[2] = fig[2]
        }
    }
    else if (pow[0] === 3 && pow[1] === 2 && pow[2] === 2) {
        if (fig[1] > fig[2]) {
            hand = []
            hand[0] = 6
            hand[1] = fig[0]
            hand[2] = fig[1]
        }
        else {
            hand = []
            hand[0] = 6
            hand[1] = fig[0]
            hand[2] = fig[2]
        }
    }

    //----------------------------------------------- KARETA
    if (pow.length === 1) {
        if (pow[0] === 4) {
            hand = []
            hand[0] = 7
            hand[1] = fig[0]
        }
    }
    else if (pow.length === 2) {
        if (pow[0] === 4 && pow[1] === 2) {
            hand = []
            hand[0] = 7
            hand[1] = fig[0]
        }
        else if (pow[0] === 2 && pow[1] === 4) {
            hand = []
            hand[0] = 7
            hand[1] = fig[1]
        }
        else if (pow[0] === 4 && pow[1] === 3) {
            hand = []
            hand[0] = 7
            hand[1] = fig[0]
        }
        if (pow[0] === 3 && pow[1] === 4) {
            hand = []
            hand[0] = 7
            hand[1] = fig[1]
        }
    }
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa")

    console.log(cardsNumbers)
    console.log(hand)



    return hand
}


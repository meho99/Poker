import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TextLabel } from "../../components/textLabel"
import { InputLabel } from "../../components/inputLabel"

const useStyles = makeStyles({
    pool: {
        position: "fixed",
        left: "5%",
        backgroundColor: "#B3AA66",
        float: "left",
        top: "20%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        fontSize: "25px",
        width: "10%"
    },
    player1Cash: {
        position: "fixed",
        left: "45%",
        backgroundColor: "#B3AA66",
        float: "left",
        bottom: "3%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        width: "10%",
        minWidth: "77px"
    },
    player2Cash: {
        position: "fixed",
        left: "45%",
        backgroundColor: "#B3AA66",
        float: "left",
        top: "3%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        width: "10%",
        minWidth: "77px"
    },
    poolAdd: {
        position: "fixed",
        left: "5%",
        backgroundColor: "#B3AA66",
        float: "left",
        top: "40%",
        boxShadow: '0 1px 5px 2px rgba(0, 0, 0, .9)',
        borderRadius: 7,
        fontSize: "25px",
        width: "10%"
    },
    player1Icon: {
        position: "fixed",
        top: "3%",
        left: "58%",
        width: "100px"
    },
    player2Icon: {
        position: "fixed",
        bottom: "2%",
        left: "58%",
        width: "100px"
    },
});

export const BorderComponent = ({
    pool,
    round,
    changePool,
    inputNames,
    player1Cash,
    player2Cash,
    player1Debt,
    player2Debt,
    playerIconSrc1,
    playerIconSrc2
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.pool}>
                <TextLabel text="POOL" value={pool} />
            </Grid>
            <Grid className={classes.player1Cash}>
                <TextLabel value={player1Cash} value2={player1Debt} />
            </Grid>

            <Grid className={classes.player2Cash}>
                <TextLabel value={player2Cash} value2={player2Debt} />
            </Grid>

            <img src={playerIconSrc2} alt="gracz" className={classes.player1Icon} />
            <img src={playerIconSrc1} alt="gracz" className={classes.player2Icon} />

            <Grid className={classes.poolAdd}>
                {
                    inputNames.map((val, index) => (
                        <InputLabel
                            changepool={changePool}
                            round={round}
                            addValue={inputNames[index]}
                        />
                    ))
                }
            </Grid>
        </>
    )
}

import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({



    root3: {
        marginLeft: "0px",
        textAlign: "center",
        fontSize: "25px",
        color: "#4A82AD",
        width: "100%",
        fontFamily: "Rockwell"
    },
});

export const Buton = ({ onClick, text, source, ChangeRound, round, ChangeButton, PassButton }) => {
    const classes = useStyles();

    const click = () => {
        if (text !== "PASS") {
            ChangeRound(round)
            ChangeButton(round)
        }
        else {
            PassButton()
        }

    }
    return (
        <div  >

            <Button className={classes.root3} onClick={click} > {text} </Button>
        </div>
    )
}
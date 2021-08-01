import React, {useEffect, useState, useRef, useCallback} from 'react'
import {
    Grid,
    Paper,
} from '@material-ui/core'
import {makeStyles } from '@material-ui/core/styles';
import { getCardType } from './cardTypes';

import Card from "./component/card";
import CardForm from "./component/card-form";


const useStyles = makeStyles({
    paperStyle:{ padding :20, marginTop: '230px' },
});

export default function creditCard() {
    const classes = useStyles();
    const [cardNumber, setCardNumber] = useState("");
    const [cardUINumber, setCardUiNumber] = useState("");
    const [cardCvv, setCardCvv] = useState("");
    const [cardMonth, setCardMonth] = useState("");
    const [cardYear, setCardYear] = useState("");
    const [holderName, setHolderName] = useState("");
    const [cardType, setCardType] = useState("visa");
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentFocusedSection, setCurrentFocusedSection] = useState(null);

    useEffect(() => {
        if (cardNumber){
            const removeSpaceNumber = cardNumber.replace(/\s/g, '');
            const cardValidate = getCardType(removeSpaceNumber);
            if (cardValidate) {setCardType(cardValidate.toLowerCase())}
            else {setCardType('visa')}
            if (removeSpaceNumber.length < 17)
            setCardUiNumber(removeSpaceNumber )
        }
        else setCardUiNumber('#### #### #### ####')
    }, [cardNumber]);

    const handleChange = (type, event) => {
        const re = /^[0-9\b]+$/;
        let number = event.target.value.replace(/\s/g, '')
        if (event.target.value === '' || re.test(number)) {
            if (type === 'cvv'){
                setCardCvv(event.target.value)
            }
            else setCardNumber(event.target.value);
        }
    };

    function cc_format(value) {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }

    let onCardFocus = (_event, inputName) => {
        setCurrentFocusedSection(inputName);
    };

    return(
        <Grid container alignItems={'center'} direction={"column"}
        style={{minHeight: '93vh'}} spacing={1}
        >
            <Paper elevation={10} className={classes.paperStyle}>

            <Grid item>
                    <Card
                        cardNumber={cc_format(cardUINumber)}
                        holderName={holderName}
                        cardCvv={cardCvv}
                        cardMonth={cardMonth}
                        cardYear={cardYear.toString().substr(-2)}
                        cardType={cardType}
                        isFlipped={isFlipped}
                        focusedSection={currentFocusedSection}
                    />
                </Grid>
                <Grid item>

                    <CardForm
                        cardNumber={cc_format(cardNumber)}
                        onNumberChange={handleChange.bind(this, '')}
                        cardMonthChange={event => setCardMonth(event.target.value)}
                        cardMonth={cardMonth}
                        cardYearChange={event => setCardYear(event.target.value)}
                        cardYear={cardYear}
                        cardCvv={cardCvv}
                        onCvvChange={handleChange.bind(this, 'cvv')}
                        holderName={holderName}
                        holderNameChange={event => setHolderName(event.target.value)}
                        onCvvFocus={event => setIsFlipped(true)}
                        onBlur={event => setIsFlipped(false)}
                        onCardFocus={onCardFocus}
                        onCardBlur={() => { setCurrentFocusedSection(null);}}
                    />
                </Grid>
            </Paper>

        </Grid>
    )
}

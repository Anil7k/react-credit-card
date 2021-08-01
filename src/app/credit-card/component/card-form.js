import React from "react";
import PropTypes from 'prop-types';
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {Button, FormControl, Typography} from "@material-ui/core";
import {StyledInput} from "../../../lib/component/styles";
import CardSelector from "../../../lib/component/selector";
import {FormStyles} from "./card-styles";

const font = createTheme();
const currentYear = new Date().getFullYear();
import {DEFAULT_CVC_LENGTH} from '../cardTypes';

const years = Array.from({ length: 9 }, (_x, i) => currentYear + i);
const months = Array.from({ length: 12 }, (x, i) => { const month = i + 1;
    return month <= 9 ? '0' + month : month;
});


font.typography.h6 = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#1a3b5d',
    display: 'block',
};
export default function CardForm(props) {
    const classes = FormStyles(props);
    const { cardNumber, onNumberChange, cardMonthChange, cardMonth, cardYearChange, cardYear, cardCvv, onCvvChange, holderNameChange,
        holderName, onCvvFocus, onBlur, onCardFocus, onCardBlur } = props;

    return(
        <div className={'form'}>
        <div className={classes.input}>
            <ThemeProvider theme={font}>
            <Typography variant={'h6'}> Card Number </Typography>
        </ThemeProvider>
            <StyledInput
                value={cardNumber}
                fullWidth
                onChange={onNumberChange}
                onFocus={(e) => onCardFocus(e, 'number')}
                onBlur={onCardBlur}
            />
        </div>
        <div className={classes.input}>
            <ThemeProvider theme={font}>
                <Typography variant={'h6'}> Card Holder </Typography>
            </ThemeProvider>
            <StyledInput
               value={holderName}
               fullWidth
               onChange={holderNameChange}
               onFocus={(e) => onCardFocus(e, 'name')}
               onBlur={onCardBlur}
            />
        </div>
    <div className={classes.input}>
        <CardSelector
            onChange={cardMonthChange}
            value={cardMonth}
            selectorList={months}
            placeholder={'Month'}
            title={'Expiration Date'}
            onCardFocus={onCardFocus}
            onCardBlur={onCardBlur}
        />
        <CardSelector
            onChange={cardYearChange}
            value={cardYear}
            selectorList={years}
            placeholder={'Year'}
            onCardFocus={onCardFocus}
            onCardBlur={onCardBlur}
        />
        <FormControl className={classes.marginCvv}>
            <ThemeProvider theme={font}>
                <Typography variant={'h6'}> CVV </Typography>
            </ThemeProvider>
            <StyledInput
                inputProps={{ maxLength: DEFAULT_CVC_LENGTH, }}
                value={cardCvv}
                onChange={onCvvChange}
                onFocus={onCvvFocus}
                onBlur={onBlur}
            />
        </FormControl>
    </div>
    <Button color='primary' variant="contained" className={classes.button} fullWidth>Submit</Button>
    </div>
    )
}

CardForm.prototype = {
    cardNumber: PropTypes.string,
    holderName: PropTypes.string,
    cardMonth: PropTypes.number,
    cardYear: PropTypes.number,
    cardCvv: PropTypes.number,
    onCardFocus: PropTypes.func,
    onCardBlur: PropTypes.func,
    onNumberChange: PropTypes.func,
    cardMonthChange: PropTypes.func,
    cardYearChange: PropTypes.func,
    onCvvChange: PropTypes.func,
}
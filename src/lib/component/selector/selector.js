import React from "react";
import PropTypes from 'prop-types';
import {createTheme, ThemeProvider, withStyles} from "@material-ui/core/styles";
import {FormControl, InputBase, MenuItem, Select, Typography} from "@material-ui/core";
import {useSelectorStyles} from "./selector-styles";
import { StyledInput } from "../styles";

const theme = createTheme();

theme.typography.h6 = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#1a3b5d',
    display: 'block',
};

export default function Selector(props) {
    const classes = useSelectorStyles(props);
    const { value, onChange, selectorList, placeholder, title, onCardFocus, onCardBlur} = props;

    return (
    <FormControl className={classes.margin}>
        <ThemeProvider theme={theme}>
            <Typography variant={'h6'}> {title ? title : '\u00A0' } </Typography>
        </ThemeProvider>
        <Select
            MenuProps={{
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "left"
                },
                transformOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                getContentAnchorEl: null
            }}
            labelId=""
            value={value}
            displayEmpty
            onChange={onChange}
            input={<StyledInput />}
            onFocus={(e) => onCardFocus(e, 'validity')}
            onBlur={onCardBlur}
        >
            <MenuItem value={''} disabled> { placeholder } </MenuItem>
            {selectorList.map((val, index) => (
                <MenuItem value={val}>{val}</MenuItem>
            ))}
        </Select>
    </FormControl>
)
}

Selector.propTypes = {
value: PropTypes.string,
onChange: PropTypes.func,
placeholder: PropTypes.string,
title: PropTypes.string,
selectorList: PropTypes.array,
};
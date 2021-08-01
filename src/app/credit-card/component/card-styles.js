import { makeStyles } from '@material-ui/core';

export const FormStyles = makeStyles(theme => ({
    input: {
        marginBottom: '15px',
    },
    margin: {
        marginRight: theme.spacing(4),
        minWidth: '150px'
    },
    marginCvv: {
        marginLeft: theme.spacing(1),
        maxWidth: '153px'
    },
    button: {
        background: '#2265d2',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin:'8px 0',
        textTransform: 'none',
        "&:hover":{
            backgroundColor: '#2265d2'
        },
    },
    menuItemHidden: {
        display: "none"
    },
    card:{
        minWidth:275
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
    },
}));
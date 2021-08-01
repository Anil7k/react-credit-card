import {InputBase} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export const StyledInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(1)
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderColor: "#3d9cff",
            boxShadow: "0 0 0 1px #3d9cff",
            borderRadius: 1
        }
    }
}))(InputBase);
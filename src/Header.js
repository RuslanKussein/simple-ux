import React from "react";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
   typographyStyle: {
       flexGrow: 1
   }
});

const Header = props => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyle}>Ne did</Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header;
import React from 'react';
import { makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    radioLabel: {
        display: "flex"
    }
}));


const CustomRadioLabel = ({ type, name, value }) => {
    const classes = useStyles();
    return (<div className={classes.radioLabel}><Rating name="rating" defaultValue={value} precision={0.5} size="medium" readOnly /> {value} & above</div>);
}

export default CustomRadioLabel;
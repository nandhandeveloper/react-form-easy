import React from 'react';
import clsx from 'clsx';
import { makeStyles, InputLabel, Typography, FormGroup, InputAdornment, IconButton, FormLabel, RadioGroup, Radio, Select, MenuItem, FormHelperText, FormControl, Checkbox, FormControlLabel, TextField, } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomRadioLabel from './CustomRadioLabel';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
    strengthMeterBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: theme.spacing(1)
    },
    tag: {
        backgroundColor: "green",
        height: "6px",
        borderRadius: "25px",
        flex: "1",
        margin: theme.spacing(1)
    },
    grayBG: {
        backgroundColor: "#ccc",
    },
    greenBG: {
        backgroundColor: green[600],
    }



}));
const GenericFormField = ({ controlDetails, onInputChangeHandler, handleClickShowPassword, handleMouseDownPassword }) => {
    const { name, type, isTouched, rows, showPassword, errors, isValid, multiline, label, value, options, row, radios, checkBoxControls, strength } = controlDetails;
    const classes = useStyles();
    let formELement = null;
    switch (type) {
        case 'select':
            formELement = (
                <FormControl fullWidth>
                    <InputLabel id={name + '1'}>{label}</InputLabel>
                    <Select
                        labelId={name + '1'}
                        id={name}
                        name={name}
                        value={value}
                        error={isTouched && !isValid}
                        onChange={e => onInputChangeHandler(e)}
                    >
                        {options.map(option => <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>)}
                    </Select>
                    {isTouched &&
                        !isValid &&
                        errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
                </FormControl>
            );
            break;
        case 'radio':
            formELement = (
                <FormControl fullWidth margin="dense" component="fieldset">
                    <FormLabel component="legend">{label}</FormLabel>
                    <RadioGroup row={row} aria-label={label} name={name} value={value} onChange={e => onInputChangeHandler(e)}>
                        {radios.map(radio => <FormControlLabel
                            key={radio.id}
                            value={radio.value}
                            control={<Radio color="primary" />}
                            label={radio.label}
                        />)}
                    </RadioGroup>
                </FormControl>
            );
            break
        case 'customradio':
            formELement = (
                <FormControl fullWidth margin="dense" component="fieldset">
                    <FormLabel component="legend">{label}</FormLabel>
                    <RadioGroup row={row} aria-label={label} name={name} value={value} onChange={e => onInputChangeHandler(e)}>
                        {radios.map(radio => <FormControlLabel
                            key={radio.id}
                            value={radio.value}
                            control={<Radio color="secondary" />}
                            label={<CustomRadioLabel {...radio.label} />}
                        />)}
                    </RadioGroup>
                </FormControl>
            );
            break
        case 'checkbox':
            formELement = (<FormControl margin="dense" fullWidth>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={value}
                            onChange={e => onInputChangeHandler(e)}
                            name={name}
                            color="primary"
                        />
                    }
                    label={label}
                />
                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormControl>);
            break;
        case 'groupcheckbox':
            formELement = (<FormGroup row={row}>
                <FormLabel component="legend">{label}</FormLabel>
                {Object.values(checkBoxControls).map(control => {
                    return (<FormControlLabel key={control.id}
                        control={
                            <Checkbox
                                checked={control.value}
                                onChange={e => onInputChangeHandler(e)}
                                name={control.name}
                                color="primary"
                            />
                        }
                        label={control.label}
                    />);
                })}

                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormGroup>);
            break;

        case 'showpassword':
            formELement = (<FormControl margin="dense" fullWidth>
                <TextField
                    error={isTouched && !isValid}
                    id={name}
                    multiline={multiline}
                    rows={rows}
                    label={label}
                    name={name}
                    onChange={e => onInputChangeHandler(e)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword(name)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }}

                    value={value}
                    type={showPassword ? 'text' : 'password'}
                />
                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormControl>);
            break;
        case 'strengthPassword':
            formELement = (<FormControl margin="dense" fullWidth>
                <TextField
                    error={isTouched && !isValid}
                    id={name}
                    multiline={multiline}
                    rows={rows}
                    label={label}
                    name={name}
                    onChange={e => onInputChangeHandler(e)}
                    value={value}
                    type='password'
                />
                <div className={classes.strengthMeterBox}>

                    {strength && Object.values(strength).map(item => item.isValid).sort((a, b) => b - a).map((isValid, index) => {
                        return <span key={index} className={clsx({
                            [classes.tag]: true,
                            [classes.grayBG]: !isValid,
                            [classes.greenBG]: isValid
                        })}></span>
                    })}
                </div>
                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormControl>
            );
            break;
        case 'showAndStrengthpassword':
            formELement = (<FormControl margin="dense" fullWidth>
                <TextField
                    error={isTouched && !isValid}
                    id={name}
                    multiline={multiline}
                    rows={rows}
                    label={label}
                    name={name}
                    onChange={e => onInputChangeHandler(e)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword(name)}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }}

                    value={value}
                    type={showPassword ? 'text' : 'password'}
                />
                <div className={classes.strengthMeterBox}>
                    {strength && Object.values(strength).map(item => item.isValid).sort((a, b) => b - a).map((isValid, index) => {
                        return <span key={index} className={clsx({
                            [classes.tag]: true,
                            [classes.grayBG]: !isValid,
                            [classes.greenBG]: isValid
                        })}></span>
                    })}
                    </div>
                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormControl>);
            break;
        case 'password':
        case 'email':
        default:
            formELement = (<FormControl margin="dense" fullWidth>
                <TextField
                    error={isTouched && !isValid}
                    id={name}
                    multiline={multiline}
                    rows={rows}
                    label={label}
                    name={name}
                    onChange={e => onInputChangeHandler(e)}
                    value={value}
                    type={type}
                />

                {isTouched &&
                    !isValid &&
                    errors.map((err, i) => <FormHelperText error={true} key={i}>{err}</FormHelperText>)}
            </FormControl>);
            break;
    }
    return (formELement);
}

export default GenericFormField;
import React from 'react';
import { InputLabel, FormLabel, RadioGroup,Radio, Select, MenuItem, FormHelperText, FormControl, Checkbox, FormControlLabel, TextField, } from '@material-ui/core';

const GenericFormField = ({ controlDetails, onInputChangeHandler }) => {
    const { name, type, isTouched, errors, isValid, label, value, options, row, radios } = controlDetails;
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
                    <RadioGroup row={row} aria-label={label} name={name} onChange={e => onInputChangeHandler(e)}>
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
        case 'password':
        case 'email':
        default:
            formELement = (<FormControl margin="dense" fullWidth>
                <TextField
                    error={isTouched && !isValid}
                    id={name}
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
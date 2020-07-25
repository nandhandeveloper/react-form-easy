import React, { useState, useEffect } from 'react';
import { Grid, Typography, makeStyles, Button, } from '@material-ui/core';
import FormDate from './formdata/FormData';
import GenericFormField from './components/GenericFormField';
import onInputChangeHandler from './common/OnInputChangeHandler';
import onShowPasswordClicked from './common/onShowPasswordClicked';

const useStyles = makeStyles((theme) => ({
  outerBox: {
    marginTop: theme.spacing(4),
  },
  innerbox: {
    marginTop: theme.spacing(4),
    padding:theme.spacing(2)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2)
  }
}));

const initialState = FormDate;

function App() {
  const classes = useStyles();

  const [customForm, setCustomForm] = useState(initialState);
  const [customFormValid, setCustomFormValid] = useState(false);

  useEffect(() => {
    const isFormValid = Object.values(customForm).every(field => field.isValid);
    setCustomFormValid(isFormValid);
  }, [customForm]);

  const inputChangeHandler = (event) => {
    onInputChangeHandler(event, customForm, setCustomForm);
  }
  const handleClickShowPassword = (name) => {
    onShowPasswordClicked(name,customForm, setCustomForm );
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes.outerBox}>
      <Grid container justify="center">
        <Grid item><Typography variant="h4">Form Easy Elements</Typography></Grid>
      </Grid>
      <Grid container className={classes.innerbox}>
        <Grid item xs={false} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          {Object.values(customForm).map(formField => <GenericFormField key={formField.name} controlDetails={formField} onInputChangeHandler={inputChangeHandler} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword}  />)}
          <div className={classes.buttons}>
            <Button type="submit" variant="contained" color="secondary" disabled={!customFormValid}>Register</Button>
          </div>
        </Grid>
        <Grid item xs={false} sm={3}></Grid>
      </Grid>
    </section>
  );
}

export default App;

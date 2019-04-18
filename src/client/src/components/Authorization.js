import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '70%'
  },
  input: {
    color: 'white'
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  notchedOutline: {
    borderRadius: '0.1rem',
    borderWidth: '0.1rem',
    borderColor: '#FFC107 !important'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
  typography: {
    useNextVariants: true,
  },
});

class Authorization extends Component {

  render() {
    const { openRegistrationModal, closeModals, classes } = this.props;
    return (
      <div className="authorization">
        <form className="authorization-form" action="">
          <div className="authorization-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="authorization-form__title">Authorization</h2>
          <div className="authorization-form__form-field">
            <TextField id="email" 
            label="Email" 
            style={{ width: '70%' }} 
            InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} 
            InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} 
            type="email" 
            name="email"
            margin="normal" 
            variant="outlined" />
            <TextField 
            id="password" 
            label="Password" 
            style={{ width: '70%' }} 
            InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} 
            InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} 
            type="password" 
            margin="normal" 
            variant="outlined" />
          </div>
          <div className="authorization-form__submit-field">
            <MuiThemeProvider theme={theme}>
              <Button 
              variant="contained" 
              color="primary" 
              style={{ width: '30%', borderRadius: '0rem', fontSize: '2rem', fontWeight: 'bold' }} 
              onClick={ this.signUp }>Sign in</Button>
            </MuiThemeProvider>
          </div>
          <div className="authorization-form__reg-link">
            <MuiThemeProvider theme={theme}>
              <Button 
              color="primary" 
              style={{ width: '30%', borderRadius: '0rem', fontSize: '1.5rem', fontWeight: 'bold' }} 
              onClick={ openRegistrationModal }>Registration</Button>
            </MuiThemeProvider>
          </div>
        </form>
      </div>
    );
  }
}

Authorization.propTypes = {
  openRegistrationModal: PropTypes.func,
  closeModals: PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Authorization);

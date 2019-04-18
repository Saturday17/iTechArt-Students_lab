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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  notchedOutline: {
    borderRadius: '0rem',
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

class Registration extends Component {

  state = {
    name: ''
  }

  signUp = e => {
    e.preventDefault();

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    const { openAuthorizationModal, closeModals, classes } = this.props;
    
    return (
      <div className="registration">
        <form className="registration-form" action="">
          <div className="registration-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="registration-form__title">Registration</h2>
          <div className="registration-form__form-field">
            <TextField id="outlined-name" label="Name" style={{ width: '70%' }} InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} value={this.state.name} onChange={this.handleChange('name')} margin="normal" variant="outlined" />
            <TextField id="outlined-email-input" label="Email" style={{ width: '70%' }} InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} type="email" name="email" autoComplete="email" margin="normal" variant="outlined" />
            <TextField id="outlined-password-input" label="Password" style={{ width: '70%' }} InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} type="password" autoComplete="current-password" margin="normal" variant="outlined" />
            <TextField id="outlined-password-input" label="Repeat password" style={{ width: '70%' }} InputLabelProps={{style: { color: '#FFC107', fontSize: '2rem' }}} InputProps={{style: { color: '#FFC107', fontSize: '2rem' }, classes: { notchedOutline: classes.notchedOutline }}} type="password" autoComplete="repeat-password" margin="normal" variant="outlined" />
          </div>
          <div className="registration-form__submit-field">
            <MuiThemeProvider theme={theme}>
              <Button variant="contained" color="primary" style={{ width: '30%', borderRadius: '0rem', fontSize: '2rem', fontWeight: 'bold' }} onClick={ this.signUp }>Sign up</Button>
            </MuiThemeProvider>
          </div>
          <div className="registration-form__auto-link">
            <MuiThemeProvider theme={theme}>
              <Button color="primary" style={{ width: '30%', borderRadius: '0rem', fontSize: '1.5rem', fontWeight: 'bold' }} onClick={ openAuthorizationModal }>Authorization</Button>
            </MuiThemeProvider>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  openAuthorizationModal: PropTypes.func,
  closeModals: PropTypes.func,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Registration);
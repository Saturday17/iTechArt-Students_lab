import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
});

class Registration extends Component {

  state = {
    name: ''
  }

  signUp = e => {
    e.preventDefault();

    const data = {
      name: this.refs.userName.value,
      login: this.refs.userLogin.value,
      password: this.refs.userPassword.value,
      repeatedPassword: this.refs.repeatedPassword.value
    }

    console.log(data);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    const { openAuthorizationModal, closeModals } = this.props;
    
    return (
      <div className="registration">
        <form className="registration-form" action="">
          <div className="registration-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="registration-form__title">Registration</h2>
          <div className="registration-form__form-field">
          <TextField id="outlined-name" label="Name" className="form-field__input" value={this.state.name} onChange={this.handleChange('name')} margin="normal" variant="outlined" />
          <TextField id="outlined-email-input" label="Email" className="form-field__input" type="email" name="email" autoComplete="email" margin="normal" variant="outlined" />
          <TextField id="outlined-password-input" label="Password" className="form-field__input" type="password" autoComplete="current-password" margin="normal" variant="outlined" />
          <TextField id="outlined-password-input" label="Repeat password" className="form-field__input" type="password" autoComplete="repeat-password" margin="normal" variant="outlined" />
          </div>
          <div className="registration-form__submit-field">
            <button className="submit-field__button" onClick={ this.signUp }>Sign up</button>
          </div>
          <div className="registration-form__auto-link">
            <a className="auto-link__auto-btn" href="#" onClick={ openAuthorizationModal }>Authorization</a>
          </div>
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  openAuthorizationModal: PropTypes.func,
  closeModals: PropTypes.func
}

export default withStyles(styles)(Registration);
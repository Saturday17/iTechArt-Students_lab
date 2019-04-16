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

class Authorization extends Component {

  render() {
    const { openRegistrationModal, closeModals } = this.props;
    return (
      <div className="authorization">
        <form className="authorization-form" action="">
          <div className="authorization-form__close-btn"><h1 onClick={ closeModals }>&times;</h1></div>
          <h2 className="authorization-form__title">Authorization</h2>
          <div className="authorization-form__form-field">
            <TextField id="outlined-email-input" label="Email" className="form-field__input" type="email" name="email" autoComplete="email" margin="normal" variant="outlined" />
            <TextField id="outlined-password-input" label="Password" className="form-field__input" type="password" autoComplete="current-password" margin="normal" variant="outlined" />
          </div>
          <div className="authorization-form__submit-field">
            <button className="submit-field__button">Sign in</button>
          </div>
          <div className="authorization-form__reg-link">
            <a className="reg-link__reg-btn" href="#" onClick={ openRegistrationModal }>Registration</a>
          </div>
        </form>
      </div>
    );
  }
}

Authorization.propTypes = {
  openRegistrationModal: PropTypes.func,
  closeModals: PropTypes.func
}

export default withStyles(styles)(Authorization);

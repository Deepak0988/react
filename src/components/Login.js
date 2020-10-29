import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenus } from '../actions/actions';

class Login extends Component {  
  render() {
    return (
      <form className="col s12">
        <div className="input-field col s6"><input type = "text" placeholder="Username"/></div> 
        <div className="input-field col s6"><input type = "password" placeholder = "Password"/></div>
        <span onClick={this.props.onLogin} className="waves-effect waves-light btn">Sign In</span>
      </form>
   )
  }
} 

const mapDispatchToProps = dispatch => {

  return {
    onLogin: () => dispatch(setMenus())
  }
}

export default connect(null,mapDispatchToProps)(Login);
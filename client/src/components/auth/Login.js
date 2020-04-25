import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/authActions";
import classnames from "classnames";

function Login(props) {
  const currentState = useSelector(state => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState({email: '', password: '', errors: {}})

  useEffect(() => {
    if (currentState.auth.isAuthenticated) {
      // redirect logged in user to dash
      props.history.push('/dashboard')
    }
  }, [currentState])

  useEffect(() => {
    setInput({
      ...input,
      errors: currentState.errors
    })
  }, [currentState.errors])

  const handleInputChange = event => {
    const {name, value} = event.target;

    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('sign in')
    dispatch(loginUser(input))
  };

  return (<div className="reg-container">
    <h3 className="text-center mb-4">Login</h3>
    <form noValidate="noValidate" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input className={classnames("form-control", {'is-invalid': input.errors.email})} type="email" name="email" placeholder="email" error={input.errors.email} onChange={handleInputChange}/>
        <span className="form-error-msg">{input.errors.email}</span>
      </div>

      <div className="mb-2">
        <input className={classnames("form-control", {'is-invalid': input.errors.password})} type="password" name="password" placeholder="password" error={input.errors.password} onChange={handleInputChange}/>
        <span className="form-error-msg">{input.errors.password}</span>
      </div>

      <button type="submit" className="btn btn-success w-100 mb-2">Login</button>
    </form>

    <Link to="/register" className="btn btn-info w-100">Create Account</Link>
    <div className="text-center mt-2">
      <Link className="text-center" to="/">cancel</Link>
    </div>
  </div>)
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({auth: state.auth, errors: state.errors});

export default connect(mapStateToProps, {loginUser})(Login);

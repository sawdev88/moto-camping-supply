import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [input, setInput] = useState({
    email: '',
    name: '',
    password: '',
    password2: '',
    errors: {}
  })

  const handleInputChange = event => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('create account')
    // dispatch(registerUser(input, props.history))
  };

  return (
    <div className="reg-container">
      <h3 className="text-center mb-4">Register</h3>
      <form noValidate onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="email" name="email" placeholder="email" error={input.errors.email} onChange={handleInputChange} />
        <span className="red-text">{input.errors.email}</span>

        <input className="form-control mb-2" name="name" placeholder="username" error={input.errors.name} onChange={handleInputChange} />
        <span className="red-text">{input.errors.name}</span>

        <input className="form-control mb-2" type="password" name="password"  placeholder="password" error={input.errors.password} onChange={handleInputChange} />
        <span className="red-text">{input.errors.passwor2}</span>

        <input className="form-control mb-4" type="password" name="password2"  placeholder="confirm password" error={input.errors.password2} onChange={handleInputChange} />
        <span className="red-text">{input.errors.password2}</span>

        <button type="submit" className="btn btn-success w-100 mb-2">Create Account</button>
      </form>

      <div className="text-center mt-2">
        <Link className="text-center" to="/">cancel</Link>
      </div>
    </div>
  )
}

export default Register;

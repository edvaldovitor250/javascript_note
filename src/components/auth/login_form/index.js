import React, { Fragment, useState } from 'react';
import { Button, Column, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from "../../../services/users";
import "../../../styles/login.scss"; 

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.login({ email: email, password: password });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true)
    }
  }

  if (redirectToRegister) return <Navigate to={{ pathname: "/register" }} />
  if (redirectToNotes) return <Navigate to={{ pathname: "/notes" }} />

  return (
    <Fragment>
      <Column.Group centered>
        <form onSubmit={handleSubmit} className="login-form">
          <Column size={12}>
            <div className="field">
              <Label size="small">Email:</Label>
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <Label size="small">Password:</Label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register</a>
                  </Column>
                  <Column>
                    <button type="submit" className="button is-success">Login</button>
                  </Column>
                </Column.Group>
              </p>
            </div>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )
}

export default LoginForm;

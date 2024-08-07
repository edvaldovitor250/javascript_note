import React, { useState } from 'react';
import { Button, Column, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from "../../../services/users";
import "../../../styles/login.scss";
import logo from "../../../assets/images/logo.png";

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
      setError(true);
    }
  };

  if (redirectToRegister) return <Navigate to="/register" />;
  if (redirectToNotes) return <Navigate to="/notes" />;

  return (
    <>
      <Column.Group centered>
        <form onSubmit={handleSubmit} className="custom-login-form">
          <Column size={12}>
            <div className="login-logo-container">
              <img src={logo} alt="Logo" className="custom-login-logo" />
            </div>
            <div className="login-tagline">Your notes on the cloud</div>
            <div className="login-field">
              <Label size="small" className="custom-login-label">Email:</Label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="custom-login-input"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="login-field">
              <Label size="small" className="custom-login-label">Password:</Label>
              <div className="control has-icons-left">
                <input
                  className="custom-login-input"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="login-field">
              <div className="control">
                <Column.Group breakpoint="mobile">
                  <Column>
                    <button
                      onClick={() => setRedirectToRegister(true)}
                      className="custom-login-button is-white has-text-custom-purple"
                    >
                      Register
                    </button>
                  </Column>

                  <Column>
                    <Button className="custom-login-button is-success" type="submit">Login</Button>
                  </Column>
                </Column.Group>
              </div>
            </div>
            {error && <Help color="danger" className="custom-help-message">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  );
}

export default LoginForm;

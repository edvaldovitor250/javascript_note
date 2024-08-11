import React, { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import '../../../styles/registerForm.scss';
import UsersService from '../../../services/users';

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await UsersService.register({ name, email, password });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <Column.Group className="column-group-centered">
      <form onSubmit={handleSubmit} className="custom-register-form-r">
        <Column size={12}>
          <Field>
            <Label size="small" className="custom-register-label-r">Name:</Label>
            <Control>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                name="name"
                className="custom-register-input-r"
              />
            </Control>
          </Field>
          <Field>
            <Label size="small" className="custom-register-label-r">Email:</Label>
            <Control>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                name="email"
                className="custom-register-input-r"
              />
            </Control>
          </Field>
          <Field>
            <Label size="small" className="custom-register-label-r">Password:</Label>
            <Control>
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                name="password"
                className="custom-register-input-r"
              />
            </Control>
          </Field>

          <Field>
  <Control>
    <div className="custom-register-buttons-group-r">
      <button
        onClick={() => setRedirectToLogin(true)}
        className="register-button-r"
      >
        Login
      </button>
      <Button color="custom-purple" outlined className="register-button-r">
        Register
      </Button>
    </div>
  </Control>
</Field>

          {error && <Help color="danger" className="custom-help-message-r">Email or Password invalid</Help>}
        </Column>
      </form>
    </Column.Group>
  );
}

export default RegisterForm;

import React, { useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import UserService from '../../../services/users';
import '../../../styles/user_edit_password.scss';

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password === passwordConfirmation) {
      try {
        await UserService.updatePassword({ password });
        setStatus("success");
      } catch (err) {
        console.error('Error updating password:', err);
        setStatus("error_update");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="custom-register-form-password">
      <Field>
        <Control>
          <Label className="custom-register-label-password">Password</Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            name="password"
            className="custom-register-input-password"
          />
        </Control>
      </Field>
      <Field>
        <Control>
          <Label className="custom-register-label-password">Password Confirmation</Label>
          <Input
            type="password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
            required
            name="password_confirmation"
            className="custom-register-input-password"
          />
        </Control>
      </Field>

      <Field>
        <Control>
          <Column.Group>
            <Column className="has-text-right">
              <Button 
                className="custom-register-button-password is-success" 
                color="custom-purple" 
                outlined
              >
                Update Password
              </Button>
            </Column>
          </Column.Group>
        </Control>
      </Field>
      {status === "error_update" &&
        <Help className="custom-help-message-password" color="danger">Problem in password update</Help>
      }
      {status === "error_confirmation_password" &&
        <Help className="custom-help-message-password" color="danger">Passwords don't match</Help>
      }
      {status === "success" &&
        <Help className="custom-help-message-password" color="primary">Updated successfully</Help>
      }
    </form>
  );
}

export default UsersEditFormPassword;

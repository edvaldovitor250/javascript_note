import React, { useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import UsersService from '../../../services/users';
import '../../../styles/user_edit_form.scss';

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.update({ email: email, name: name });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <form className="custom-register-form-formEdit" onSubmit={handleSubmit}>
        <Field>
          <Control>
            <Label className="custom-register-label-formEdit">Full Name</Label>
            <Input
              type="text"
              value={name || ""}
              onChange={e => setName(e.target.value)}
              required
              name="name"
              className="custom-register-input-formEdit"
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label className="custom-register-label-formEdit">Email</Label>
            <Input
              type="email"
              value={email || ""}
              onChange={e => setEmail(e.target.value)}
              required
              name="email"
              className="custom-register-input-formEdit"
            />
          </Control>
        </Field>

        <Field>
          <Control>
            <Column.Group>
              <Column className="has-text-right">
                <Button className="custom-register-button-formEdit" color="custom-purple" outlined>Update</Button>
              </Column>
            </Column.Group>
          </Control>
        </Field>
        {status === "error" &&
          <Help className="custom-help-message-formEdit" color="danger">Problem in update</Help>
        }
        {status === "success" &&
          <Help className="custom-help-message-formEdit" color="primary">Updated with success</Help>
        }
      </form>
    </>
  );
}

export default UsersEditForm;

import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card } from 'rbx';
import HeaderLogged from '../../../components/header_logged';
import UsersEditForm from '../../../components/users/user_edit_form';
import UsersEditPasswordForm from '../../../components/users/user_edit_password_form';
import UsersDelete from '../../../components/users/user_delete/index';
import '../../../styles/users_edit.scss';

const UserEditScreen = () => (
  <Fragment>
    <HeaderLogged />
    <Section size="medium" className="users-editMain">
      <Container>
        <Column.Group centered className="users-editMain">
          <Column size={4}>
            <Title size={5} className="has-text-grey users-editMain-title">
              Informações Pessoais
            </Title>
            <Card className="users-editMain-card">
              <Card.Content>
                <UsersEditForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className="users-editMain">
          <Column size={4}>
            <Title size={5} className="has-text-grey users-editMain-title">
              Password
            </Title>
            <Card className="users-editMain-card">
              <Card.Content>
                <UsersEditPasswordForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        
        <Column.Group centered>
          <Column size={4} className="has-text-right">
            <UsersDelete />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default UserEditScreen;

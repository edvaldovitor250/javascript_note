import React from 'react';
import LogoImage from '../../../assets/images/logo.png';
import { Column, Section, Title, Container, Card } from "rbx";
import "../../../styles/auth.scss";
import Header from './../../../components/header/index';
import RegisterForm from '../../../components/auth/register_form'

const RegisterScreen = () => (
  <>
    <Header className="custom-header" />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered className="is-vcentered">
          <Column size={4}>
            <Card className="custom-card">
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12} className="has-text-centered">
                      <img src={LogoImage} alt="Logo" />
                    </Column>
                  </Column.Group>
                  <Column.Group centered>
                    <Column size={12} className="has-text-centered">
                      <Title size={6} className="has-text-grey">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                  <RegisterForm />
                </Section>

              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
);

export default RegisterScreen;

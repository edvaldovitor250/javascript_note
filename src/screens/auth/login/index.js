import Header from "../../../components/header";
import { Column, Section, Title, Container, Card, Fragment } from "rbx";
import "../../../styles/auth.scss";
import LoginForm from '../../../components/auth/login_form'

const LoginScreen = () => (
  <div>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <Column.Group centered>
                    <Column size={12}>
                    </Column>
                  </Column.Group>

                  <Column.Group>
                    <Column size={12}>
                      <Title size={6} className="has-text-grey has-text-centered">
                      </Title>
                    </Column>
                  </Column.Group>
                  <LoginForm />
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </div>
);

export default LoginScreen;
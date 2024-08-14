import { Navbar, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/logo.png';
import "../../styles/header_logged.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { useState } from 'react';

function HeaderLogged() {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const logOut = async () => {
        await UserService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome) {
        return <Navigate to="/" />;
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <Navbar color="custom-purple" className="navbar-logged-l">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={logoImage} alt="Logo" />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Burger
                    className="navbar-burger-l burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-menu-l">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Navbar.Burger>
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item-l navbar-end-l" align="right">
                    <Navbar.Item as="div" className="dropdown-container-l">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button
                                    className="dropdown-button-l"
                                    color="white"
                                    outlined
                                    onClick={toggleDropdown}
                                >
                                    <span>Edvaldo ▼</span>
                                </Button>
                            </Dropdown.Trigger>
                            {isDropdownOpen && (
                                <Dropdown.Menu className="dropdown-menu-l">
                                    <Dropdown.Content>
                                        <Dropdown.Item as="div">
                                            <Link to="/users/edit">User Edit</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider-l" />
                                        <Dropdown.Item as="a" onClick={(e) => {
                                            e.preventDefault();
                                            logOut();
                                        }}>
                                            LogOut
                                        </Dropdown.Item>
                                    </Dropdown.Content>
                                </Dropdown.Menu>
                            )}
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );
}

export default HeaderLogged;

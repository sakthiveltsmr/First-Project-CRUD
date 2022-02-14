import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavbarBrand, NavItem, Navbar, Container } from "reactstrap";

const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container className="d-flex">
        <NavbarBrand href="/">My Team</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary " to="/add">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;

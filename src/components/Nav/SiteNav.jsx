import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const SiteNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Site Manager</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem onClick={() => toggleNavbar()}>
              <Link to="/">Posts</Link>
            </NavItem>
            <NavItem onClick={() => toggleNavbar()}>
              <Link to="/projects">Projects</Link>
            </NavItem>
            <Button onClick={() => props.logout()}>Logout</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

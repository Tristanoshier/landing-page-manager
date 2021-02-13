import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

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
            <NavItem>
              <NavLink to="/">Posts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <Button onClick={() => props.logout()}>Logout</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

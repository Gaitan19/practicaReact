import { routes } from "@/constants/routes";
import {
  CCollapse,
  CContainer,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const renderRoutes = () => {
    return routes.map((route) => {
      return (
        <CNavItem key={route.id}>
          <Link className="Navbar-link" href={route.link}>
            {route.text}
          </Link>
        </CNavItem>
      );
    });
  };

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">Navbar</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>{renderRoutes()}</CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navbar;

import { routes, routesLinks } from "@/constants/routes";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CCollapse,
  CContainer,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CTooltip,
} from "@coreui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaSignOutAlt } from "react-icons/fa";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { logout, isAuthenticated, user } = useAuth0();
  const router = useRouter();

  const handleRedirect = async () => await router.push(routesLinks.login);
  useEffect(() => {
    if (!isAuthenticated) {
      handleRedirect();
    }
  }, [isAuthenticated]);

  console.log("user :>> ", user);

  const renderRoutes = () => {
    return routes
      .filter((route) => route.text !== "home")
      .map((route) => {
        return (
          <CNavItem key={route.id}>
            <Link className="Navbar-link" href={route.link}>
              {route.text}
            </Link>
          </CNavItem>
        );
      });
  };

  // const handleLogout = async () => {
  //   await logout();
  //   await router.push(routesLinks.login);
  // };

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href={routesLinks.posts}>PostsApp</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse
            className="navbar-collapse justify-content-between"
            visible={visible}
          >
            <CNavbarNav>{renderRoutes()}</CNavbarNav>
            <div className="Navbar-tools">
              {isAuthenticated && <span>{user.nickname}</span>}
              <CTooltip content="Logout" placement="bottom">
                <button className="Navbar-logout" onClick={() => logout()}>
                  <FaSignOutAlt />
                </button>
              </CTooltip>
            </div>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Navbar;

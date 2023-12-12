import { routes, routesLinks } from "@/constants/routes";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CAvatar,
  CCollapse,
  CContainer,
  CNavItem,
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
import Image from "next/image";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { logout, isAuthenticated, user } = useAuth0();
  console.log("user :>> ", user);
  const router = useRouter();

  const handleRedirect = () => router.push(routesLinks.login);
  useEffect(() => {
    if (!isAuthenticated) {
      handleRedirect();
    }
  }, [isAuthenticated]);

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

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="Navbar">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <Image
              width={112}
              height={79}
              src="/logo-smbs.png"
              alt="SMBS logo"
              priority
            />
          </CNavbarBrand>
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
              {isAuthenticated && (
                <>
                  <Image
                    className="Navbar-avatar"
                    src={user.picture}
                    width={76}
                    height={76}
                    alt="user avatar"
                  />
                  <span>{user.nickname}</span>
                </>
              )}
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

import { routesLinks } from "@/constants/routes";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const router = useRouter();
  const handleRedirect = () => router.push(routesLinks.posts);
  useEffect(() => {
    if (isAuthenticated) {
      handleRedirect();
    }
  }, [isAuthenticated]);

  return (
    <div className="d-flex justify-content-center p-5">
      <div className="Login Format-container">
        <Image
          width={112}
          height={79}
          src="/logo-smbs.png"
          alt="SMBS logo"
          priority
        />
        <div className="Format-container">
          <h2 className="Login-title Format-title">Welcome to the posts App</h2>
          <button className="Login-button" onClick={() => loginWithRedirect()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

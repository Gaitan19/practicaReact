import { routesLinks } from "@/constants/routes";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  //   console.log("isAuthenticated :>> ", isAuthenticated);
  //   console.log("user :>> ", user);
  const router = useRouter();
  const handleRedirect = async () => await router.push(routesLinks.posts);
  useEffect(() => {
    if (isAuthenticated) {
      handleRedirect();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Welcome to Next post App</h2>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        // handleRedirect()
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default Login;

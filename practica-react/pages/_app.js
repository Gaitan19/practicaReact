import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App({ Component, pageProps }) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  return (
    <>
      {typeof window !== "undefined" ? (
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Component {...pageProps} />
        </Auth0Provider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App({ Component, pageProps }) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri="/">
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

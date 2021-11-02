import "@styles/globals.scss";
import { useEffect } from "react";
import Router from "next/router";
import { SnipcartProvider } from "hooks/use-snipcart";
import { WishlistProvider } from "context/Wishlist";
import NProgress from "nprogress";
import Layout from "@components/layout/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <SnipcartProvider>
      <WishlistProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WishlistProvider>
    </SnipcartProvider>
  );
}

export default MyApp;

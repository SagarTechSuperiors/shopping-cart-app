import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  
  const publicPages = ["/login", "/signup"];
  const isPublicPage = publicPages.includes(router.pathname);
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Provider store={store}>
    
      <GoogleAnalytics GA_ID="G-XXXXXXXXXX" />

      
      <Layout>
        {isPublicPage ? (
          
          <Component {...pageProps} />
        ) : (
         
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </Layout>
    </Provider>
  );
}

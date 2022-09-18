import DefaultLayout from "@/layout/LandingPageLayout";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(Component.Layout);
  const Layout = Component.Layout ? Component.Layout : DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

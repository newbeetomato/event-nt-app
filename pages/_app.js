import "../styles/globals.css";
import "../styles/general.sass";
import MainLayout from "../src/components/layout/main-layout";

// maine git orda anlatıldı
export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

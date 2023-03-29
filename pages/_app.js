import { useState, createContext } from "react";
import { appWithTranslation } from "next-i18next";
import Form from "../components/Form/Form";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import "../styles/globals.scss";
import Head from "next/head";

export const FormContext = createContext();

function MyApp({ Component, pageProps }) {
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/svg/hotel-svetionik-logo.png" />
        <meta property="og:image" content="/svg/hotel-svetionik-logo.png" />
      </Head>
      <div className="app">
        <Form
          formVisibility={formIsVisible}
          closeForm={() => setFormIsVisible(false)}
        />
        <FormContext.Provider value={() => setFormIsVisible(true)}>
          <Header openForm={() => setFormIsVisible(true)} />

          <main className="layout">
            <Component {...pageProps} />
          </main>
          <Footer />
        </FormContext.Provider>
      </div>
    </>
  );
}

export default appWithTranslation(MyApp);

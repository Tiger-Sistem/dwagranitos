import "./App.css";
import AppRoute from "./AppRoute";
import { LanguageProvider, useLanguageContext } from "./LanguageContext";
import FooterEnglish from "./components/English/Footer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const languageContext = useLanguageContext();

  console.log("Idioma ", languageContext.idioma);

  return (
    <LanguageProvider>
      <div className="App">
        <Header />
      </div>
    </LanguageProvider>
  );
}

export default App;

import "./App.css";
import { LanguageProvider, useLanguageContext } from "./LanguageContext";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

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

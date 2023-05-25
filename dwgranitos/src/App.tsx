import "./App.css";
import AppRoute from "./AppRoute";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoute />
      <Footer />
    </div>
  );
}

export default App;

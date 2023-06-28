import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Engineering from "./pages/Engineering";
import Piso from "./pages/Pisos";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento/Orcamento";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/catalogo" element={<Catalog />} />
      <Route path="/engenharia" element={<Engineering />} />
      <Route path="/pisos" element={<Piso />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/orcamento" element={<Orcamento />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};

export default AppRoutes;

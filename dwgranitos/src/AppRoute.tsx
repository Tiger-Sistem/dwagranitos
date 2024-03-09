import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeEnglish from "./pages/English/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Engineering from "./pages/Engineering";
import Piso from "./pages/Pisos";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento/Orcamento";
import AboutEnglish from "./pages/English/About";
import CatalogEnglish from "./pages/English/Catalog";
import EngineeringEnglish from "./pages/English/Engineering";
import BlogEnglish from "./pages/English/Blog";
import ContactEnglish from "./pages/English/Contato";
import Quote from "./pages/English/Orcamento/Quote";

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
      <Route path="/en" element={<HomeEnglish />} />
      <Route path="/en/about" element={<AboutEnglish />} />
      <Route path="/en/catalog" element={<CatalogEnglish />} />
      <Route path="/en/engineering" element={<EngineeringEnglish />} />
      <Route path="/en/blog" element={<BlogEnglish />} />
      <Route path="/en/quote" element={<Quote />} />
      <Route path="/en/contact" element={<ContactEnglish />} />
    </Routes>
  );
};

export default AppRoutes;

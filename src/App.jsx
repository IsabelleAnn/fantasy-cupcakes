import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ShoppingCart } from "./pages/ShoppingCart";
import MenuItem from "./pages/MenuItem";
import Footer from "./components/Footer";
import { Link } from "react-scroll";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

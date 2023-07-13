import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/order-now">Order Now</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
      </nav>
    </header>
  );
}

import React from "react";
import ShoppingIcon from "./ShoppingIcon";
import { Link } from "react-scroll";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            to="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            to="menu"
          >
            Cupcake Menu
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
            to="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

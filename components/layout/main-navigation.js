import Link from "next/link";
import React from "react";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link className="sm:block" href="/">
        <Logo />
      </Link>
      <nav className="sm:flex">
        <ul>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/hamburger">Hamburger</Link>
          </li>

          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

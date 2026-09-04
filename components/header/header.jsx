
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Education", path: "/education" },
    { name: "Achievements", path: "/acheivement" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>PJ</span>

          <span className={styles.logoText}>
            Pinimal<span>.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className={styles.navbar} aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${
                  isActive ? styles.active : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="mailto:Pinimalrj123@gmail.com"
          className={styles.contactButton}
        >
          Let's Talk <span>↗</span>
        </a>

      </div>
    </header>
  );
}

export default Header;

"use client";

import React, { useState, useRef } from "react";

import Navigation from "./navigation/navigation";

import classes from "./header.module.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Manish</div>
            <button
                onClick={toggleMenu}
                type="button"
                className={`${classes.hamburger}  ${
                    isMenuOpen ? classes.active : ""
                }`}
            >
                <span className={classes.line}></span>
                <span className={classes.line}></span>
                <span className={classes.line}></span>
            </button>
            <div
                ref={navRef}
                className={`${classes.navWrap} ${
                    isMenuOpen ? classes.active : ""
                }`}
            >
                <Navigation />
            </div>
            <div className={classes.copyright}>
                &copy; {new Date().getFullYear()} Manish
            </div>
        </header>
    );
};

export default Header;

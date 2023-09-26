import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseContext } from "@/context/mouseContext";

import classes from "./navigation.module.scss";

const Navigation = () => {
    const pathname = usePathname();
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li
                    className={`${classes.item} ${
                        pathname === "/" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/"}
                    >
                        Home
                    </Link>
                </li>
                <li
                    className={`${classes.item} ${
                        pathname === "/about" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/about"}
                    >
                        About
                    </Link>
                </li>
                <li
                    className={`${classes.item} ${
                        pathname === "/service" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/service"}
                    >
                        Service
                    </Link>
                </li>
                <li
                    className={`${classes.item} ${
                        pathname === "/portfolio" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/portfolio"}
                    >
                        Portfolio
                    </Link>
                </li>
                <li
                    className={`${classes.item} ${
                        pathname === "/news" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/news"}
                    >
                        News
                    </Link>
                </li>
                <li
                    className={`${classes.item} ${
                        pathname === "/contact" ? classes.active : ""
                    }`}
                >
                    <Link
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
                        href={"/contact"}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

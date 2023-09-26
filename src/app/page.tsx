import Image from "next/image";
import myImg from "@/assets/images/me.jpg";

import classes from "./page.module.scss";

export default function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.image}>
                {/* <Image src={myImg.src} fill alt="Manish Sharma" /> */}
                <div></div>
            </div>
            <div className={classes.details}>
                <h1>Manish Sharma</h1>
                <p>
                    I&apos;m a full time web developer and want to create
                    everyone&apos;s web experience better.
                </p>
                <ul className={classes.icons}>
                    <li className={classes.icon}>
                        <a
                            href="https://www.linkedin.com/in/iammanishshrma"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={classes.linkedin}></i>
                        </a>
                    </li>
                    <li className={classes.icon}>
                        <a
                            href="https://github.com/iammanishshrma"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={classes.github}></i>
                        </a>
                    </li>
                    <li className={classes.icon}>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={classes.fb}></i>
                        </a>
                    </li>
                    <li className={classes.icon}>
                        <a
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={classes.x}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

"use client";
import { useContext } from "react";

import useMousePosition from "@/hooks/useMousePosition";
import { MouseContext } from "@/context/mouseContext";

import classes from "./dotRing.module.scss";

const DotRing = () => {
    const { x, y } = useMousePosition();
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <>
            <div
                style={{ left: `${x}px`, top: `${y}px` }}
                className={`${classes.ring} ${classes[cursorType]}`}
            />
            <div
                className={`${classes.dot} ${classes[cursorType]}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
        </>
    );
};

export default DotRing;

//Header component
import React from "react";

export default function Header() {
    return (
        <header className="Header">
            <img
                className="Header--trollimg"
                src="images/troll_face.png"
                alt=""
            />
            <h1 className="Header--name">Meme Generator</h1>
            <p className="Header--project">React Courses - Project 3</p>
        </header>
    );
}

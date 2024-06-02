//Header component
import React from "react";

export default function Header() {
    return (
        <header className="header">
            <img
                className="header--trollimg"
                src="images/troll_face.png"
                alt=""
            />
            <h1 className="header--name">Meme Generator</h1>
            <p className="header--project">React Courses - Project 3</p>
        </header>
    );
}

//Header component
import React from "react";

export default function Header() {
    return (
        <header className="Header">
            <h1 className="Header--name">
                <img
                    className="Header--trollimg"
                    src="images/troll_face.png"
                    alt=""
                />
                Meme Generator
            </h1>
            <p className="Header--project">React Courses - Project 3</p>
        </header>
    );
}

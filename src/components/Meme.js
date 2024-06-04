//Meme component - Form
import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
    //new state / state variable with initial value as empty string
    const [memeImage, setMemeImage] = useState("");

    function getMemeImage() {
        const memesArr = memesData.data.memes;
        const random = Math.floor(Math.random() * 100);
        const url = memesArr[random].url;
        //call the setter function
        setMemeImage(url);
    }

    return (
        <main className="Meme">
            <section className="Meme--input-section">
                <div className="top">
                    <label htmlFor="top" className="Meme--top-label">
                        Top text
                    </label>
                    <input id="top" type="text" className="Meme--top-field" />
                </div>

                <div className="bottom">
                    <label htmlFor="bottom" className="Meme--bottom-label">
                        Bottom text
                    </label>
                    <input
                        id="bottom"
                        type="text"
                        className="Meme--bottom-field"
                    />
                </div>
            </section>

            <button
                //attaching event listeners
                //since this is a proper form remember to use event.preventDefault()
                onClick={getMemeImage}
                className="Meme--button"
                type="submit"
            >
                Get a new meme image
                <img
                    alt="img"
                    src="/images/pic.png"
                    className="Meme--button-image"
                />
            </button>
            <div className="Meme--image-container">
                <img className="Meme--image" src={memeImage} />
            </div>
        </main>
    );
}

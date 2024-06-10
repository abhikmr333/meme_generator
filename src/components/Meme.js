//Meme component - Form
import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
    //new state with initial value as meme object
    //also connecting inputs with state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    //new state which defaults to the imported memesData above
    //why this one in state? Assuming more memes get added later down the line using setAllMemeImages
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getMemeImage() {
        //extract a random image when button clicked
        const memesArray = allMemeImages.data.memes;
        const random = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[random].url;

        //and call the setter function to update image
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,
            };
        });
    }

    //function that handles the changes on each keystorke in top and bottom inputs
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => {
            return { ...prevMeme, [name]: value };
        });
    }
    console.log(meme.topText + " " + meme.bottomText);
    return (
        <main className="Meme">
            <section className="Meme--input-section">
                <div className="top">
                    <label htmlFor="top" className="Meme--top-label">
                        Top text
                    </label>
                    <input
                        name="topText"
                        //for controlled inputs
                        value={meme.topText}
                        onChange={handleChange}
                        id="top"
                        type="text"
                        className="Meme--top-field"
                    />
                </div>

                <div className="bottom">
                    <label htmlFor="bottom" className="Meme--bottom-label">
                        Bottom text
                    </label>
                    <input
                        name="bottomText"
                        //for controlled inputs
                        value={meme.bottomText}
                        onChange={handleChange}
                        id="bottom"
                        type="text"
                        className="Meme--bottom-field"
                    />
                </div>
            </section>

            <button
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
            <div className="Meme--container">
                <img className="Meme--image" src={meme.randomImage} />
                <h2 className="Meme--top-text">{meme.topText}</h2>
                <h2 className="Meme--bottom-text">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

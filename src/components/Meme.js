//Meme component - Form
import React, { useState, useEffect } from "react";
// import memesData from "../memesData.js";

export default function Meme() {
    //new state with initial value as meme object
    //also connecting inputs with state
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    //making an Api call to get the meme data
    const [allMemes, setAllMemes] = useState([]);

    //no dependencies because we want this to fetch the data only once so empty array as second parameter
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => {
                if (!response.ok) throw new Error("Not Found!");
                return response.json();
            })
            .then((result) => {
                //when you get the data back update the state of setAllMemes with result.data.memes array
                setAllMemes(() => {
                    return [...result.data.memes];
                });
            });
    }, []);

    function getMemeImage() {
        //extract a random image when button clicked
        const random = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[random].url;
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
    console.log("comoponent rendered!");
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

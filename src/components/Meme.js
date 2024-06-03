//Meme component - Form
import React from "react";

export default function Meme() {
    return (
        <main className="Meme">
            <form>
                <section className="Meme--input-section">
                    <div className="top">
                        <label htmlFor="top" className="Meme--top-label">
                            Top text
                        </label>
                        <input
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
                            id="bottom"
                            type="text"
                            className="Meme--bottom-field"
                        />
                    </div>
                </section>
                <button className="Meme--button" type="submit">
                    Get a new meme image
                    <img src="/images/pic.png" className="Meme--button-image" />
                </button>
            </form>
        </main>
    );
}

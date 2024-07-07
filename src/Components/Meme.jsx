import memesData from "../store/memesData"
import { useState } from "react";
export default function Meme(){
    const [memeImage,getMemeImage] = useState("")
    function newMemeImage(){
        const randomIndex = Math.floor(Math.random() * memesData.data.memes.length)
        const randomURL = memesData.data.memes[randomIndex].url
        getMemeImage(randomURL)
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    onClick={newMemeImage} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage}/>
        </main>
    )
}
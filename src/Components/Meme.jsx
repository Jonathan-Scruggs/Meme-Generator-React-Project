import memesData from "../store/memesData"
import { useState } from "react";
export default function Meme(){
    const [meme,setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const [alllMemeImages,func] = useState(memesData)
    function newMemeImage(){
        const randomIndex = Math.floor(Math.random() * alllMemeImages.data.memes.length)
        const randomURL = alllMemeImages.data.memes[randomIndex].url
        setMemeImage(meme => {
            return {...meme,randomImage: randomURL}
        })
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
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}
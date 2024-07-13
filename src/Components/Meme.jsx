import memesData from "../store/memesData"
import { useState } from "react";
export default function Meme(){
    const [meme,setMemeImage] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })
    const [alllMemeImages,func] = useState(memesData)
    function handleChange(event){
        const {name,value} = event.target
        setMemeImage(prevMeme =>{
            return {
                ...prevMeme,
                [name]: value
            }
        })

    }
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
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button
                    onClick={newMemeImage} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
import TrollFace from "../assets/troll-face.png"
export default function Header(){

    return (
        <header className="header">
            <img src={TrollFace} className="header--image"/>
            <h2 className="header--title">Header component</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>

    )
}
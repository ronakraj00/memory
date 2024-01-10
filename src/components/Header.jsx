import logo from "../assets/memory_game_logo.jfif"
import '../css/header.css'
export default function Header() {

    return <>
        <header>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div>Memory Game</div>
            <div className="score">
                <div className="score-current">8</div>
                <div className="score-highest">10</div>
            </div>
        </header>
        
    </>;
}

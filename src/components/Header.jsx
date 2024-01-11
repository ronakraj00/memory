import logo from "../assets/memory_game_logo.jfif"
import '../css/header.css'
export default function Header({points,round,maxPoints}) {

    return <>
        <header>
            <div className="logo"><img src={logo} alt="logo" /></div>
            <div>Memory Game</div>
            <div className="score">
                <div className="score-current">
                    <p>Points</p>{points}</div>
                <div className="score-highest">
                    <p>Max Points</p>{maxPoints}</div>
                <div><p>Round No</p>{round}</div>
            </div>
        </header>
        
    </>;
}

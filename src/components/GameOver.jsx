import "../css/gameover.css"

export default function GameOver({onClick}) {
    return <div className="game-over-screen">
        <div className="game-over-img-wrapper">
            <img src="../assets/pokemon-background" alt="" />
        </div>
        <button className="restart-btn" onClick={onClick}>Restart</button>
    </div>;
}

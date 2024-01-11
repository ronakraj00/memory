import "../css/appscreen.css";

export default function AppScreen({ setShowAppScreen }) {
    return (
        <>
            <div className="app-screen">
                <p className="welcome">
                    Welcome To <span>Memory <span>Game</span></span>
                </p>
                <div>
                    <p className="instruction">How To Play?</p>
                    <p>Just Don&apos;t click on the same card twice!</p>
                </div>
                <button className="start-btn" onClick={()=>setShowAppScreen(false)}>start</button>
            </div>
        </>
    );
}

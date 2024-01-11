import { useEffect, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [points, setPoints] = useState(0);
    const [round, setRound] = useState(1);
    const [maxPoints, setMaxPoints] = useState(0);
    return (
        <>
            <Header {...{ points, round, maxPoints }} />
            <Body
                points={points}
                setPoints={setPoints}
                setMaxPoints={setMaxPoints}
                setRound={setRound}
            />
            <Footer />
        </>
    );
}

export default App;

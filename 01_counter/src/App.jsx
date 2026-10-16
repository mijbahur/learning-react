import { useState } from "react";
import "./App.css";

function App() {
    let [goal, setGoal] = useState(0);

    const addGoal = () => {
        setGoal(goal + 1);
        console.log("Goal added", goal);
    };
    const cancleGoal = () => {
        setGoal(goal - 1);
        console.log("Goal added", goal);
    };
    return (
        <>
            <h1>Football Score</h1>
            <h2>Goals: {goal}</h2>

            <button onClick={addGoal}>Add Goal</button>
            <br />
            <button onClick={cancleGoal}>Cancle Goal</button>
        </>
    );
}

export default App;

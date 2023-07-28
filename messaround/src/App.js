import React, {useState} from 'react';
import './App.css';
import DoorOpening from './components/DoorOpening';
import BallBouncing from './components/BallBouncing';

const App = () => {
    const [stage, setStage] = useState(1);

    const stageMap = {
        0: <DoorOpening setStage={setStage}/>,
        1: <BallBouncing setStage={setStage}/>,
        2: <div>2</div>
    };

    return <div className="App">
        {stageMap[stage]}
    </div>
}

export default App;

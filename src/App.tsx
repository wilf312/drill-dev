import React from "react";
import "./global/reset.css";
import "./global/App.css";


import {Top} from './component/Top'
import {Switch} from './component/Switch'

const App: React.FC = () => {
  return (
    <div className="App">
      <Top />
      <Switch />
    </div>
  );
};

export default App;

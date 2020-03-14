import React from "react";
import "./global/App.css";
import "./global/reset.css";

import {Top} from './component/Top'

const App: React.FC = () => {
  return (
    <div className="App">
      <Top />
    </div>
  );
};

export default App;

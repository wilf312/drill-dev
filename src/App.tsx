import React, { useState } from "react";
import styled from 'styled-components';
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

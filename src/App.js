import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import "./App.css";

import MainList from "./MainList";
import Mon from "./Mon";
import Tue from "./Tue";
import Wed from "./Wed";
import Thu from "./Thu";
import Fri from "./Fri";
import Sat from "./Sat";
import Sun from "./Sun";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <MainList />
        </Route>
        <Route path="/Mon" exact>
          <Mon />
        </Route>
        <Route path="/Tue" exact>
          <Tue />
        </Route>
        <Route path="/Wed" exact>
          <Wed />
        </Route>
        <Route path="/Thu" exact>
          <Thu />
        </Route>
        <Route path="/Fri" exact>
          <Fri />
        </Route>
        <Route path="/Sat" exact>
          <Sat />
        </Route>
        <Route path="/Sun" exact>
          <Sun />
        </Route>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export default App;

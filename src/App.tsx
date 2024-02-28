import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNames } from "./apis/NamesAPI";
import { iNestedNames } from "./models/NestedNames";
import NamesList from "./components/organisms/names-list";

const AppWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

function App() {
  const [names, setNames] = useState<iNestedNames>([]);

  useEffect(() => {
    getNames().then((namesResponse) => {
      setNames(namesResponse);
    });
  }, []);

  return (
    <AppWrapperDiv className="App">
      <NamesList names={names} />
    </AppWrapperDiv>
  );
}

export default App;

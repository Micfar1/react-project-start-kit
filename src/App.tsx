import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAtlassionData } from "./apis/AtlassianAPI";
import { iAtlassianResponses } from "./models/Atlassian";
import NamesList from "./components/organisms/topics-list";

const AppWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
`;

function App() {
  const [atlassianItems, setAtlassianItems] = useState<iAtlassianResponses>([]);

  useEffect(() => {
    getAtlassionData().then((atlassianResponse) => {
      setAtlassianItems(atlassianResponse);
    });
  }, []);

  return (
    <AppWrapperDiv className="App">
      <NamesList topics={atlassianItems} />
    </AppWrapperDiv>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import DisplayTime from "./components/atoms/display-time";
import styled from "styled-components";

const AppWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <AppWrapperDiv className="App">
      <DisplayTime time={currentDate} />
    </AppWrapperDiv>
  );
}

export default App;

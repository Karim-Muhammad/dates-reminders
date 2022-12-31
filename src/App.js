import React from "react";
import { Button, Container } from "react-bootstrap";

import "./App.css";
// Data
import { dates } from "./data";

// Components
import DatesCount from "./Components/DatesCount";
import ShowList from "./Components/ShowList/ShowList";
import ControlButtons from "./Components/ControlButtons";

function App() {
  const [data, setData] = React.useState(dates);

  const clearData = () => {
    console.log("Clear");
    setData([]);
  };

  const showData = () => {
    console.log("Show");
    setData(dates);
  };
  console.log("App Component");
  return (
    <div className="App primary">
      <Container>
        <DatesCount length={data.length} />
        <ShowList dates={data} />
        <ControlButtons clearData={clearData} showData={showData} />
      </Container>
    </div>
  );
}

export default App;

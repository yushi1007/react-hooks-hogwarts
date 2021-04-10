import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";


function App() {

  const [isShowHogs, setIsShowHogs] = useState(true)

  const handleHogsClick = () => {
    setIsShowHogs((isShowHogs) => !isShowHogs)
     console.log(isShowHogs)
  }

  return (
    <div className="App">
      <Nav />
      <button onClick={handleHogsClick}>{!isShowHogs ? "Hide" : "Show" } Hogs</button>
      <HogList hogs={hogs} isShowHogs={isShowHogs}/>
    </div>
  );
}

export default App;

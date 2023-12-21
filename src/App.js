import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [temp, setTemp] = useState({
    increase: 0,
    red: 247,
    blue: 0,
  });

  let styles = {
    backgroundColor: `rgb(${temp.red}, 1, ${temp.blue})`,
  };

  console.log(temp);

  useEffect(() => {
    if (temp.blue > 247) {
      setTemp({ ...temp, blue: 247 });
    } else if (temp.blue < 0) {
      setTemp({ ...temp, blue: 0 });
    }

    if (temp.red > 247) {
      setTemp({ ...temp, red: 247 });
    } else if (temp.red < 0) {
      setTemp({ ...temp, red: 0 });
    }
  }, [temp.red, temp.blue]);

  return (
    <div className="App">
      <header>
        <h3>TEMP.</h3>
      </header>
      <div className="container">
        <div className="controls">
          <h1
            onClick={() =>
              setTemp({ ...temp, red: temp.red + 20, blue: temp.blue - 20 })
            }
          >
            +
          </h1>
          <h1
            onClick={() =>
              setTemp({ ...temp, red: temp.red - 20, blue: temp.blue + 20 })
            }
          >
            -
          </h1>
        </div>
        <div className="temperatureContainer" style={styles}></div>
      </div>
    </div>
  );
}

export default App;

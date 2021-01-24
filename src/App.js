import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import ColorInputForm from "./components/ColorInputForm";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorShades, setColorShades] = useState(new Values("#f15025").all(10));

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color);
      console.log(colors.all(10));
      setColorShades(colors.all(10));
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>

        <ColorInputForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          color={color}
          isError={error}
        />
      </section>

      <section className="colors">
        {colorShades.length > 0 &&
          colorShades.map((shades, index) => {
            return (
              <SingleColor
                key={index}
                {...shades}
                index={index}
                hexColor={shades.hex}
              />
            );
          })}
      </section>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexColorMain = `#${hexColor}`;
  const bgc = rgb.join(",");
  const hex = rgbToHex(...rgb); // spreading my array values while passing values to the function

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hexColorMain);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`${index > 10 ? "color-light" : null} color`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorMain}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;

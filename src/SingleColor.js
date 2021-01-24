import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexColorMain = `3${hexColor}`;
  const bgc = rgb.join(",");
  const hex = rgbToHex(...rgb); // spreading my array values while passing values to the function
  return (
    <article
      className={`${index > 10 ? "color-light" : null} color`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorMain}</p>
    </article>
  );
};

export default SingleColor;

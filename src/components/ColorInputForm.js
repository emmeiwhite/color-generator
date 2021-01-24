import React, { useState } from "react";
import "./ColorInputForm.css";

export default function ColorInputForm({
  handleChange,
  handleSubmit,
  color,
  isError,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={color}
        placeholder="#f15025"
        className={`${isError ? "error" : null}`}
      />
      <button className="btn btn-submit">Submit Color</button>
    </form>
  );
}

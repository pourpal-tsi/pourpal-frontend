"use client";
import React, { useRef } from "react";

export default function RangeSlider() {
  const STEP = 10;
  const minValueRef = useRef(0);
  const maxValueRef = useRef(1000);

  const handleMinChange = (event) => {
    const value = Math.min(event.target.value, maxValueRef.current - STEP);
    minValueRef.current = value;
    document.getElementById("minValueDisplay").innerText = `${value} Eur`;
    event.target.value = value;
  };

  const handleMaxChange = (event) => {
    const value = Math.max(event.target.value, parseInt(minValueRef.current) + STEP);
    maxValueRef.current = value;
    document.getElementById("maxValueDisplay").innerText = `${value} Eur`;
    event.target.value = value;
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="min" className="block">
        <div className="flex justify-between font-semibold">
          <div>From</div>
          <div id="minValueDisplay">{minValueRef.current} Eur</div>
        </div>
        <input
          type="range"
          id="min"
          name="min"
          defaultValue={minValueRef.current}
          onChange={handleMinChange}
          className="range range-primary"
          min="0"
          max="1000"
          step={STEP}
        />
      </label>
      <label htmlFor="max" className="block">
        <div className="flex justify-between font-semibold">
          <div>To</div>
          <div id="maxValueDisplay">{maxValueRef.current} Eur</div>
        </div>
        <input
          type="range"
          id="max"
          name="max"
          defaultValue={maxValueRef.current}
          onChange={handleMaxChange}
          className="range range-primary"
          min="0"
          max="1000"
          step={STEP}
        />
      </label>
    </div>
  );
};

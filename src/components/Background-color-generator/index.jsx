import React, { useState, useEffect } from "react";

export default function ColorTool() {
  const [mode, setMode] = useState("gradient"); // "gradient" or "single"
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [singleColor, setSingleColor] = useState("#000000");

  // Gradient State
  const [color1, setColor1] = useState("#f60993");
  const [color2, setColor2] = useState("#e60903");
  const [direction, setDirection] = useState("to bottom right");
  const [gradient, setGradient] = useState("");
  const [copied, setCopied] = useState(false);

  // Utility to generate random number
  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // HEX & RGB Generators
  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setSingleColor(hexColor);
  }

  function handleRandomRgbColor() {
    let r = randomUtility(255);
    let g = randomUtility(255);
    let b = randomUtility(255);
    setSingleColor(`rgb(${r},${g},${b})`);
  }

  // Trigger color generation when type changes
  useEffect(() => {
    if (typeOfColor === "hex") {
      handleRandomHexColor();
    } else {
      handleRandomRgbColor();
    }
  }, [typeOfColor]);

  // Update gradient on color or direction change
  useEffect(() => {
    setGradient(`linear-gradient(${direction}, ${color1}, ${color2})`);
  }, [color1, color2, direction]);

  const handleCopy = () => {
    const textToCopy =
      mode === "gradient" ? `background: ${gradient};` : `background: ${singleColor};`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const generateRandomGradient = () => {
    const randomHex = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor1(randomHex());
    setColor2(randomHex());
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      style={{ background: mode === "gradient" ? gradient : singleColor }}
    >
      <h1 className="text-black/50 text-center font-bold text-[3rem] uppercase tracking-[0.5em]">
        {mode === "gradient" ? "Gradient Generator" : "Single Color Generator"}
      </h1>

      {/* Mode Switch */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => setMode("gradient")}
          className={`px-4 py-2 rounded-lg ${
            mode === "gradient" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Gradient Mode
        </button>
        <button
          onClick={() => setMode("single")}
          className={`px-4 py-2 rounded-lg ${
            mode === "single" ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          Single Color Mode
        </button>
      </div>

      {/* GRADIENT MODE */}
      {mode === "gradient" && (
        <>
          {/* Direction Selector */}
          <div className="mt-4">
            <label className="mr-2 font-medium">Direction:</label>
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            >
              <option value="to right">To Right</option>
              <option value="to left">To Left</option>
              <option value="to top">To Top</option>
              <option value="to bottom">To Bottom</option>
              <option value="to top left">To Top Left</option>
              <option value="to top right">To Top Right</option>
              <option value="to bottom left">To Bottom Left</option>
              <option value="to bottom right">To Bottom Right</option>
            </select>
          </div>

          {/* Color Pickers */}
          <div className="flex gap-6 mt-6 items-center">
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                className="w-16 h-10 cursor-pointer"
              />
              <span
                className="w-10 h-10 rounded-full border border-gray-400"
                style={{ background: color1 }}
              ></span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-16 h-10 cursor-pointer"
              />
              <span
                className="w-10 h-10 rounded-full border border-gray-400"
                style={{ background: color2 }}
              ></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              {copied ? "Copied!" : "Copy CSS"}
            </button>
            <button
              onClick={generateRandomGradient}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl hover:scale-105 transition"
            >
              Random Gradient
            </button>
          </div>
        </>
      )}

      {/* SINGLE COLOR MODE */}
      {mode === "single" && (
        <>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setTypeOfColor("hex")}
              className={`px-4 py-2 rounded-lg ${
                typeOfColor === "hex" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              HEX
            </button>
            <button
              onClick={() => setTypeOfColor("rgb")}
              className={`px-4 py-2 rounded-lg ${
                typeOfColor === "rgb" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              RGB
            </button>
            <button
              onClick={typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:scale-105 transition"
            >
              Generate Random Color
            </button>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">{singleColor}</h2>
          <button
            onClick={handleCopy}
            className="mt-4 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            {copied ? "Copied!" : "Copy CSS"}
          </button>
        </>
      )}
    </div>
  );
}

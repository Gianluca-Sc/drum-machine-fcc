import React from "react";

function Controller({ volume, display, changeVolume, isOn, setIsOn }) {
  return (
    <div className="controls">
      <div id="display"> {isOn && <h4>{display}</h4>}</div>
      <button
        className={isOn ? "btn-on" : ""}
        onClick={() => setIsOn((value) => !value)}
      >
        <h4>On / Off</h4>
      </button>
      <h4>Volume</h4>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => changeVolume(e)}
      />
    </div>
  );
}

export default Controller;

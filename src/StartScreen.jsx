import React from "react";

function StartScreen({ dispatch }) {
  return (
    <div className="start-screen">
      <div className="main-title">Welcome to React Quiz!!</div>

      <p className="plain-text">Wanna challenge your coding skills ?</p>
      <button
        className="btn start-btn"
        onClick={() => {
          dispatch({ type: "active" });
        }}
      >
        Let's Start{" "}
      </button>
    </div>
  );
}

export default StartScreen;

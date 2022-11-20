import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        <span className="material-symbols-outlined">play_circle</span>
      </a>

      <span className="phonetic-text"> {props.phonetic.text} </span>
    </div>
  );
}

import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="<Meaning">
      <h4 className="partOfSpeech pt-1"> {props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <p className="Request-example ">{definition.example} </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}

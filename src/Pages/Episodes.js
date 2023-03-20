import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";

// Destructure INFO in OBJECT Response from API
const Episodes = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  // Inside useEffect Hook add a an IIFE (Immediately Invoked Function Expression)
  // a JavaScript function that runs as soon as it is defined.
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let details = await Promise.all(
        data.characters.map((items) => {
          return fetch(items).then((res) => res.json());
        })
      );
      setResults(details);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4 ">
        <h1 className="text-center mb-3">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date - {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">Pick Episodes</div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;

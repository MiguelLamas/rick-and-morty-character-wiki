import React from 'react'

const Cards = ({ results }) => {
 let display;
 console.log(results);

 if (results) {
  display = results.map(result => {
    let {id, name} = result;
    return( <div key={id} className="col-4">
    {name}
    </div> 
    );
  });
 } else {
    display = "No Characters Found :/";
 }



  return <>{display}</>
};

export default Cards

import React from 'react'
import { useParams } from "react-router-dom";

const CardDetails = () => {
let { id } = useParams();

  return (
    <div>
      Card Details Here - {id}
    </div>
  )
}

export default CardDetails

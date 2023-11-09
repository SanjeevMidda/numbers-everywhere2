import React from 'react'
import { useState } from 'react';

function Number({randomSize, content}) {

    const [visibility, setVisibility] = useState(true);

    function switchVisiblity(){
      setVisibility(false);
    }

  return (
    <h1 style={randomSize()} className={visibility? "show" : "dontShow"} onClick={switchVisiblity}>{content}</h1>
  )
}

export default Number
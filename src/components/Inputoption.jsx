import React from 'react'
import "./Inputoption.css"

function Inputoption({Icone, Title, colo}) {
  return (
    <div className="InputOption">
      <div>
        <Icone style={{color: colo}} />
        <h4>{Title}</h4>
        </div>
    </div>
  )
}

export default Inputoption
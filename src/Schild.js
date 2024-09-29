import React from 'react'

function Schild() {
    console.log("chaild rerender")

  return (
    <div>Schild</div>
  )
}

export default React.memo(Schild)
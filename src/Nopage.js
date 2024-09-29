import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Nopage() {

  var navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/Products')
    }, 3000)
  })

  return (
    <div>
      Page is Not Found
    </div>
  )
}

export default Nopage;
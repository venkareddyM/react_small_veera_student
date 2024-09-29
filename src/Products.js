import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


function Products() {

  const [data, setData] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setData(json.products))
  }, [])

  function ProductDetails(e) {
    navigate('/Productdetails', { state: e })
  }

  return (
    <div className='container'>
      <h3>Products</h3>
      <div className='row'>
        {data.map((e) => (
          <div className='col-md-4 '>
            <div className='card mb-3'>
              <img src={e.images} />
              <h5>{e.title}</h5>
              <h5>price: &#8377;{e.price}</h5>
              <button onClick={() => ProductDetails(e)} className='btn btn-success mb-3'>View More..</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Products;
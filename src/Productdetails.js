import React from 'react'
import { useLocation } from 'react-router-dom'


function Productdetails() {
  const location = useLocation();
  const state = location.state || {}; 

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <h2>{state.title}</h2>
          <div>
            <img className='product-details-img' src={state.images} />
          </div>
          <div>
            <p>{state.description} </p>
          </div>
          <div>
            <b>warrantyInformation:{state.warrantyInformation} </b>
            <p>shippingInformation:{state.shippingInformation} </p>
            <p>availabilityStatus:{state.availabilityStatus} </p>
          </div>
          <div>
            <h2>Reviews:</h2>
            <div>
              {state.reviews && state.reviews.length > 0 ? (
                state.reviews.map((review, index) => (
                  <div key={index}>
                    <p>Rating: {review.rating}</p>
                    <p>Comment: {review.comment}</p>
                    <b>Name: {review.reviewerName}</b>
                    <b>Email: {review.reviewerEmail}</b>
                    <hr />
                  </div>
                ))
              ) : (
                <p>No reviews available.</p>
              )}
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <h3>product Rating:{state.rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default Productdetails;
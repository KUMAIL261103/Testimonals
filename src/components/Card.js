import React from 'react'
import {FaQuoteLeft, FaQuoteRight,  } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Card = (props) => {
  const review = props.data;
  const SupriseHandler = ()=>{
    props.SupriseHandler();
  }
 

  review.job = review.job.toUpperCase();
  return(
    <div className="card">
        <div className="Heading-container">
          <div className="image-display">
          <img src={review.image} alt={review.name} className="person-img" />
          </div>
          <div className="name">
            <p>{review.name}</p>
          </div>
          <div className="job">
            <p>{review.job}</p>
          </div>
        </div>
        <div className="review-container">
          <FaQuoteLeft className="quote-icon" />
          <p>{review.text}</p>
          <FaQuoteRight className="quote-icon" />
          </div>
          <div className="button-container">
            <button className="prev-btn" onClick={ props.prevfunc}><FiChevronLeft /></button>
            <button className="next-btn" onClick={props.nextfunc}><FiChevronRight /></button>
          </div>
          <div className="random-btn-container">
            <button className="random-btn" onClick={SupriseHandler}>Surprise Me</button>
          </div>
              
    </div>
    
    
  )
}

export default Card

import React from 'react'
import { useState } from 'react';
import Card from './Card';
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    const SupriseHandler = ()=>{
        const random = Math.floor(Math.random()*5);
        console.log(random);
        setI(random);
    }
    const next = ()=>{
        if(i<props.reviews.length-1){
            setI(i+1);
        }
        else{
            setI(0);
        }
    }
    const prev = ()=>{
        if(i>0){
            setI(i-1);
        }
        else{
            setI(props.reviews.length-1);
        }
    }

   
    
    const [i, setI] = useState(0);
    const data  = props.reviews;
  return (
       
        <Card key={data[i].id} data={data[i] } SupriseHandler={SupriseHandler} nextfunc= {next} prevfunc={prev} />
       
  );
}

export default Testimonials

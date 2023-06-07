import React from 'react'
import  "./style2.css"
import { NavLink } from 'react-router-dom'
const Card = ({data}) => {
    // console.log(data)
  return (
   <>
  {
    data.map((current)=>{
        return(
<div class="parent">
 <div class="left">
  <div className='img-div'><img class="img" src={current.show.image.medium} alt="nothing"></img></div>
 

 </div>

 <div class="right">
<h1 className='heading'>{current.show.name}</h1>
<p><span><b>Type:</b></span> {current.show.type}</p>
<p><span><b>Language:</b></span> {current.show.language}</p>
<p><span><b>Genres:</b></span> {current.show.genres}</p>
<p><span><b>Rating:</b></span> {current.show.rating.average}</p>
<NavLink className="know-more" to={`shows/${current.show.id}`}><i><b>Know More</b></i></NavLink>

 </div>

    </div>


        )
    })
  }
   </>
  )
}

export default Card
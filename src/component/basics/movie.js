import React from "react"
import  "./style3.css"
const Movie =({mydata})=>{
  console.log(mydata)
  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    movie_name: '',
    run_time: ''
  });
  const handleClick = () => {
    setIsDisplayed(!isDisplayed);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Reset form
    // setFormData({
    //   name: '',
    //   email: '',
    //   movie_name: '',
    //   run_time: ''
    // });
    handleClick();
  };
return(
    
    <> 
    <div class="parent">
 <div class="left">
  <div className="img-div"><img class="img" src={mydata.image['medium']} alt="nothing"></img></div>
 

 </div>

 <div class="right">
<h1 className='heading'>{mydata.name}</h1>
<p><span><b>Type:</b></span> {mydata.type}</p>
<p><span><b>Language:</b></span> {mydata.language}</p>
<p><span><b>Genres:</b></span> {mydata.genres}</p>
<p><span><b>Rating:</b></span> {mydata.rating.average}</p>
<p className="summary">{mydata.summary}</p>
<button onClick={handleClick}>Book ticket</button>



 </div>

    </div>
{/* <p><span><b>Rating:</b></span> {mydata.rating.average}</p> */}

    <div class="container" style={{ display: isDisplayed ? 'block' : 'none' }}>
    <h2>Fill Your Details</h2>
    <form onSubmit={handleSubmit}>
      
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required></input>
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="movie-name" name="movie-name" value={mydata.name} required></input>
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="runtime" name="runtime" value={mydata.runtime+' minutes'} required></input>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
      </div>
      
      <div class="form-group">
        <input type="submit" onClick={handleSubmit}value="Submit"></input>
      </div>
    </form>
  </div>

    </>
)
}
export default Movie
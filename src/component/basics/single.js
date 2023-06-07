import  "./style3.css"
import { useParams } from 'react-router-dom'
import React, { useEffect} from 'react'
import Movie from "./movie";
const Single =()=>{
    const [MyData,setMyData]=React.useState(0);
    
    useEffect(() => {
      console.log("hsbjsv")
        const fetchData = async () => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        // const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
          const newData = await response.json();
          setMyData(newData);
          console.log(id)
          console.log(newData)
          console.log(MyData);
          console.log("hsbjsv")
        } ;
          
        fetchData();
    },[]);
    const {id}=useParams();
    
    console.log(MyData);
    return(
      
      <div>
      {MyData? (
        <Movie mydata={MyData} />
      ) : (
        <p>Loading API data...</p>
      )}
    </div>
    )
    

}
export default Single
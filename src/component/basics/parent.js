import React from "react";
import { useEffect } from "react";
import "./style2.css"
import Card from "./card";

const List = () =>{
    const [MenuData,setMenuData]=React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
        //   console.log("fetch");
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
          const newData = await response.json();
          setMenuData(newData);
        } ;
          
        
        
        
        fetchData();
    },[]);
      console.log(MenuData)
    return(
 <Card data={MenuData}/> 
    )
}
export default List
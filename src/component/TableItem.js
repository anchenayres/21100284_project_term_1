import React from "react";
import { Line } from "react-chartjs-2";


const TableItem = (props) => {


    return (
        <>
       <div className="tableItem" key={props.data}>
          <img src={props.imgUrl} />   
          <p>Flight Name: {props.fname}</p>     
          <p>Flight Number: {props.fnum}</p>  
          <p><a target="_blank" href={newLink}>Watch the Launch</a></p>
      </div>
       
        
        
        
        
        
        
        
        
        
        
        
        </>          
      
    );
  }

  export default TableItem;



  
 
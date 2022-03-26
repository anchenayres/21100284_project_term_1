import React from "react";


const TableItem = (props) => {





    return (
      <div className="tableItem" key={props.id}> 
          <p>Team Name: {props.fullname}</p>     
          <p>Season: {props.season}</p>  
          <p>Home Score: {props.homescore}</p> 
          <p>Visitor Score: {props.visitorscore}</p> 
          
      </div>
    );
  }
  
  export default TableItem;
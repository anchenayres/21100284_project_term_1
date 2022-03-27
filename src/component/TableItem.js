import React from "react";


const TableItem = (props) => {


    return (
      <div className="tableItem" key={props.id}> 
          <p>Planet Name: {props.name}</p>     
          <p>Moons: {props.bodyType}</p>  
          <p>Planet Discovered By: {props.discoveredBy}</p>           
      </div>
    );
  }
  
  export default TableItem;
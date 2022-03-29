import React from "react";


const TableItem = (props) => {
    return (
      <div className="tableItem" key={props.id}>

        <p>Discovery Name: {props.planeetNaam} </p> 
        <p>Discovery Date: {props.datum} </p>     
        <p>Dicovery Name: {props.naam} </p>  
      </div>
    );
  }
  
  export default TableItem;
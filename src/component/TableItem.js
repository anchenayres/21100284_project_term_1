import React from "react";


const TableItem = (props) => {


    return (
      <div className="tableItem" key={props.id}> 
          <div className="bargraph">
            <Bar data= {{
        labels: ['La Lune', 'Phobos', 'Callisto', 'Himalia', 'Praxidike', 'Europa'],
        datasets: [{
            label: 'Density (g.cm3)',
            data: [3.34400, 1.90000, 1.83000, 1.00000, 1.00000, 3.01000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
            }} height={400} width={600} option={{}}
            />
        </div>           
      </div>
    );
  }
  
  export default TableItem;
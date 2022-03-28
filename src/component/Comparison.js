import React, { useEffect } from "react";
import "chart.js/auto";
import {Bar, Pie, PolarArea} from "react-chartjs-2";


const Comparison = () =>{

    return (
        <>
        <h>Exploring Planets</h>
        <div className="select">
            <select>
                <option value="0">All</option>
                <option value="1">Pie Chart</option>
                <option value="3">Bar Graph</option>
                <option value="4">Polar Radar Graph</option>
                <option value="5">Timeline Graph</option>
                
            </select>
        </div>
        <div className="select-results">
        </div>
        
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
        <div className="piegraph">
        <Pie data= {{
        labels: ['Planet', 'Dwarf Planet', 'Moons Planet', 'Moons Dwarf Planet', 'Moons Asteroid'],
        datasets: [{
            label: '# of Votes',
            data: [8, 5, 206, 9, 558],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(300, 26, 245, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(300, 26, 245, 0.2)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
            }} height={400} width={600} option={{}}
            
            />
            
        </div>
        
        <div className="areachart">
            <PolarArea data= {{
        labels: ['La Lune', 'Phobos', 'Callisto', 'Himalia', 'Praxidike', 'Europa'],
        datasets: [
            {
              label: '# of Votes',
              data: [7.34600, 1.06000, 1.07590, 9.50000, 4.30000, 4.80000],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(300, 26, 245, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(300, 26, 245, 0.2)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            },
          ],
            }} height={400} width={600} option={{}}
            
            />
            
        </div>
        </>
    )
    
}

export default Comparison; 
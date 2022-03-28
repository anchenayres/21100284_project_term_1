import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { Line, Pie, PolarArea } from 'react-chartjs-2';
import TableItem from "./TableItem";

ChartJS.register(ArcElement, Tooltip, Legend);

const Comparison = () =>{

    const [graphInfo, setgraphInfo] = useState([]);
    const [timeInfo, settimeInfo] = useState([]);
    const [showInfo, setFailedInfo] = useState ([]);
   

    const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];


    useEffect(()=> {
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then((res) => {
            console.log(res);
            const data = res.data.bodies
           

            const yearlyDisc = [];

            for (let i = 0; i < data.length; i++) {
                let date = data[i].discoveryDate;
                date = date.substring(6);
                if (date === "2010") {
                    yearlyDisc.push("2010");  
                }
                if (date === "2011") {
                    yearlyDisc.push("2011");  
                }
                if (date === "2012") {
                    yearlyDisc.push("2012");  
                }
                if (date === "2013") {
                    yearlyDisc.push("2013");  
                }
                if (date === "2014") {
                    yearlyDisc.push("2014");  
                }
                if (date === "2015") {
                    yearlyDisc.push("2015");  
                }
                if (date === "2016") {
                    yearlyDisc.push("2016");  
                }
                if (date === "2017") {
                    yearlyDisc.push("2017");  
                }
                if (date === "2018") {
                    yearlyDisc.push("2018");  
                }
                if (date === "2019") {
                    yearlyDisc.push("2019");  
                }
                if (date === "2020") {
                    yearlyDisc.push("2020");  
                }
            }
          
            console.log(yearlyDisc);

            const ten = yearlyDisc.filter((item) => item === "2010").length;
            const eleven = yearlyDisc.filter((item) => item === "2011").length;
            const twelve = yearlyDisc.filter((item) => item === "2012").length;
            const thirteen = yearlyDisc.filter((item) => item === "2013").length;
            const fourteen = yearlyDisc.filter((item) => item === "2014").length;
            const fifteen = yearlyDisc.filter((item) => item === "2015").length;
            const sixteen = yearlyDisc.filter((item) => item === "2016").length;
            const seventeen = yearlyDisc.filter((item) => item === "2017").length;
            const eighteen = yearlyDisc.filter((item) => item === "2018").length;
            const nineteen = yearlyDisc.filter((item) => item === "2018").length;
            const twenty = yearlyDisc.filter((item) => item === "2018").length;

            console.log(ten);
            console.log(twenty);

            settimeInfo([ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty]);
            const moon = data.filter((item) => item.bodyType === "Moon").length;
            const planet = data.filter((item) => item.bodyType === "Planet").length;
            const asteroid = data.filter((item) => item.bodyType === "Asteroid").length;
            const comet = data.filter((item) => item.bodyType === "Comet").length;

            setgraphInfo([moon, planet, asteroid, comet]);

            

            
        })
    }, [])

    const showItems = showInfo.filter((item) => <TableItem id)

    const ChartData = {
        labels: ['moon', 'planet', 'asteroid', 'comet'],
        datasets: [{
            label: '# of Votes',
            data: graphInfo,
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
    }
            
    function updatedTime() {
        if(getValue === "Failed") {
            settimeInfo(failedItems);
        } else if (getValue === "Success") {
            settimeInfo(successItems);
        }
    }
            


    
    return (
        <>
        <div className="left-panel"> 
            <Line data={ChartData} />
        </div>
    


        <h>Exploring Planets</h>
       
        <div className="select">
            <select className="chartType" id="chartTpe" onchange="updateChartType()">
                <option value="pie">Pie Chart</option>
                <option value="polar">Polar Radar Graph</option>
                <option value="line">Timeline Graph</option>
            </select>
        </div>

        <div className="select-results">
            <div id="mychart"></div>
        </div>

    




        


        
        
        
        <div className="areachart">
        <PolarArea data= {{
        labels: ['moon', 'planet', 'asteroid', 'comet'],
        datasets: [
            {
              label: '# of Votes',
              data: graphInfo,
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


        <Line data = {{
                    labels,
                    datasets: [
                        {
                        label: ['timeline'],
                        data: timeInfo,
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(223, 119, 255)',
                            'rgb(235, 255, 119)',
                            'rgb(142, 255, 119)',
                            'rgb(255, 119, 248)',
                            'rgb(223, 119, 255)',
                            'rgb(235, 255, 119)',
                            'rgb(142, 255, 119)',
                            'rgb(255, 119, 248)'
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(223, 119, 255, 0.5)',
                            'rgba(235, 255, 119, 0.5)',
                            'rgba(142, 255, 119, 0.5)',
                            'rgba(255, 119, 248, 0.5)',
                            'rgba(223, 119, 255, 0.5)',
                            'rgba(235, 255, 119, 0.5)',
                            'rgba(142, 255, 119, 0.5)',
                            'rgba(255, 119, 248, 0.5)'
                        ]
                        
                        }, 
                    ],
                }} 
                />
        </>
    
    );
    
}

export default Comparison; 
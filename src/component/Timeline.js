import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';



const Timeline = () => {
    const [timeInfo, settimeInfo] = useState([]);

    const labels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    


    useEffect(() => {

        const yearlyDisc = [];

   
            
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then((res) => {
            console.log(res);
            const data = res.data.bodies

         



            for (let i = 0; i < data.length; i++) {
                let date = data[i].discoveryDate;
                date = date.substring(6);
                if (date === "2010") {  
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
            
        })
    },[])

  

    return (
        <>
        <h>Discovery Timeline</h>

        <div className="timeline-timeline-block">
            <div className="timeline-timeline">
                <h5>Timeline of the Discovered Planets</h5>
                <Line data = {{
                    labels,
                    datasets: [
                        {
                        label: ['Discovered Planets Over Ten Years'],
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
            </div>
            
        </div>

        <select className="options">
            <option>2010</option>
            <option>2011</option>
        </select>
        <div className="con2">

        </div>
        

        </>
    )
};
export default Timeline;



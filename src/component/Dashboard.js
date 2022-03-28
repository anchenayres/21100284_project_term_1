import React from "react";
import 'chart.js/auto'
import {Bar, Pie, PolarArea} from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';

const Dashboard = () =>{
    const [graphInfo, setgraphInfo] = useState([]);
    const [timeInfo, settimeInfo] = useState([]);





    useEffect(() => {
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

               
            }

            console.log(yearlyDisc);

            const moon = data.filter((item) => item.bodyType === "Moon").length;
            const planet = data.filter((item) => item.bodyType === "Planet").length;
            const asteroid = data.filter((item) => item.bodyType === "Asteroid").length;
            const comet = data.filter((item) => item.bodyType === "Comet").length;

            const ten = yearlyDisc.filter((item) => item === "2010").length;

          console.log(ten);

            setgraphInfo([moon, planet, asteroid, comet]);
        },[])
    })

    return (
        <>
    
        <h>The Solar System</h>
        <div className="block-text">
            <p>Welcome to The Solar System! Our system is a collection of planets, moons, asteroids, comets,
            dust and gas which orbits around the star, the Sun. Around 4.6 billion years ago, a giant cloud of dust
            and gas (solar nebula) collapsed in on itself and began to form the solar system's sun and planets.
            </p>
        </div>
        <div className="timeline_block">Text</div>
        <div className="bar_block">This is where the bar graph will be</div>
        <div className="pie_block">This is where the pie graph will be</div>
        <div className="polar_block">This is where the polar graph will be</div>
        <div className="block_text_2">Text</div>
        <div className="block_text_3">Text</div>
        
        <div className="piegraph-dash">
            <Pie data= {{
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
            }} height={400} width={600} option={{}}
            
            />
            
        </div>  
        <div className="areachart-dash">
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
        
        </>
        
        

        
       
           
       
    );
}

export default Dashboard;
//<div className="square-block" width="200" height="200"></div>
//<div className="timeline-block" width="1420" height="400"></div>
            //<div className="piechart-block" width="500" height="371"></div>
            //<div className="piechart-2-block" width="450" height="371"></div>
            //<div className="piechart-3-block" width="450" height="371"></div>
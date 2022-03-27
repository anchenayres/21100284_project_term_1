import React from "react";
import 'chart.js/auto'
import {Bar, Pie, PolarArea} from "react-chartjs-2";

const Dashboard = () =>{
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
        <div className="areachart-dash">
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
        
        

        
       
           
       
    );
}

export default Dashboard;
//<div className="square-block" width="200" height="200"></div>
//<div className="timeline-block" width="1420" height="400"></div>
            //<div className="piechart-block" width="500" height="371"></div>
            //<div className="piechart-2-block" width="450" height="371"></div>
            //<div className="piechart-3-block" width="450" height="371"></div>
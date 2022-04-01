import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { Bar, Pie, PolarArea } from 'react-chartjs-2';
import TableItem from "./TableItem";



const Comparison = () => {

    
    const [planetInfo, setPlanetInfo] = useState([]);



    useEffect(()=> {
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then((res) => {
            console.log(res);
            const data = res.data.bodies

            let planet = data.filter((item) => item.isPlanet === true)

            setPlanetInfo(planet)

            console.log(planet);
        })
    }, [])

    const [planetOneInfo, setPlanetOneInfo] = useState([]);
    const [planetOneName, setPlanetOneName] = useState([]);
    const [planetTwoName, setPlanetTwoName] = useState([]);

    let selectedPlanetOne = useRef();
    const getPlanetOne = () => {
        let planetOneName = selectedPlanetOne.current.value;
        setPlanetOneInfo(planetInfo.filter((item) => item.englishName == planetOneName))
        setPlanetOneName(planetOneName);
    }
  
    const [planetTwoInfo, setPlanetTwoInfo] = useState([]);

    let selectedPlanetTwo = useRef();
    const getPlanetTwo = () => {
        let planetTwoName = selectedPlanetTwo.current.value;
        setPlanetTwoInfo(planetInfo.filter((item) => item.englishName == planetTwoName))
        setPlanetTwoName(planetTwoName);

    }

    const [chartData, setChartData] = useState([]);
    let selectedStat = useRef();
    const getStats = () => {
        let stat = selectedStat.current.value;
        let planetOneStatValue = planetOneInfo[0][stat];
        let planetTwoStatValue = planetTwoInfo[0][stat];
        setChartData([planetOneStatValue, planetTwoStatValue]);
        console.log(planetOneStatValue);
    }

    const chartInfo = {
        labels: ['moon', 'planet', 'asteroid', 'comet'],
        datasets: [{
            label: '# of Votes',
            data: chartData,
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


  
    return (
        <>
        <h>Exploring Planets</h>

                
                    <select className="select" onChange={getPlanetOne} ref={selectedPlanetOne}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.name}>{item.englishName}</option>)
                        }
                    </select>

                    <select className="select" onChange={getPlanetTwo} ref={selectedPlanetTwo}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.name}>{item.englishName}</option>)
                        }
                    </select>

                    <select className="select" onChange={getStats} ref={selectedStat}>
                        <option>Choose stats to compare</option>
                        <option value="avgTemp">Average Temp</option>
                        <option value="density">Density</option>
                        <option value="equaRadius">Equatorial Radius</option>
                        <option value="polarRadius">Polar Radius</option>
                        <option value="gravity">Gravity</option>
                        
                    </select>

                

               
                <div className="comp-bar-block">
                <div className="comp-bar">
                <Bar data={chartInfo} />
        </div>
        </div>
                
        <div className="comp-pie-block">
        <div className="comp-pie">
        <Pie data= {{
        labels: ['moon', 'planet', 'asteroid', 'comet'],
        datasets: [{
            label: '# of Votes',
            data: chartData,
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
        </div>

        <div className="comp-polar-block">
        <PolarArea data= {{
        labels: ['moon', 'planet', 'asteroid', 'comet'],
        datasets: [{
            label: '# of Votes',
            data: chartData,
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
        <div className="comp-polar">
        </div>
        </div>


                
        </>
    
    );
    
}

export default Comparison; 
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

    let selectedPlanetOne = useRef();
    const getPlanetOne = () => {
        let planetOneName = selectedPlanetOne.current.value;
        setPlanetOneInfo(planetInfo.filter((item) => item.englishName == planetOneName))
        setPlanetOneName(planetOneName);
    }
  
    const [planetTwoInfo, setPlanetTwoInfo] = useState([]);
    const [planetTwoName, setPlanetTwoName] = useState([]);


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
        <h>Comparing Planet Information</h>

        <div className="comp_img">
        <div className="comp_image1">Text</div>
        <div className="comp_image2">Text</div>
        <div className="comp_image3">Text</div>
        <div className="comp_image4">Text</div>
        </div>


                
                    <select className="select" onChange={getPlanetOne} ref={selectedPlanetOne}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.englishName}>{item.englishName}</option>)
                        }
                    </select>

                    <select className="select" onChange={getPlanetTwo} ref={selectedPlanetTwo}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.englishName}>{item.englishName}</option>)
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
                <Bar data= {{
        labels: [planetOneName, planetTwoName],
        datasets: [{
            label: [planetOneName, planetTwoName],
            data: chartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                
            ],
            borderWidth: 1
        }]
    }} height={400} width={600} option={{}}
            />
        </div>
        </div>
                
        <div className="comp-pie-block">
        <div className="comp-pie">
        <Pie data= {{
        labels: [planetOneName, planetTwoName],
        datasets: [{
            data: chartData,
            backgroundColor: [
                'rgba(253, 98, 98, 0.4)',
                'rgba(251, 196, 65, 0.4)',
            ],
            borderColor: [
                'rgba(253, 98, 98, 0.4)',
                'rgba(203, 152, 251, 0.2)',
            ],
            borderWidth: 1
        }]
            }} height={400} width={600} option={{}}
            />
        </div>
        </div>

        <div className="comp-polar-block">
        <div className="comp-polar">
        <PolarArea data= {{
        labels: [planetOneName, planetTwoName],
        datasets: [{
            data: chartData,
            backgroundColor: [
                'rgba(235, 212, 13, 0.4)',
                'rgba(203, 152, 251, 0.4)',
            ],
            borderColor: [
                'rgba(235, 212, 13, 0.4)',
                'rgba(203, 152, 251, 0.4)',
            ],
            borderWidth: 1
        }]
            }} height={400} width={600} option={{}}
            />
        
        </div>
        </div>

        <div className="comp_img2">
        <div className="comp_image5">Text</div>
        <div className="comp_image6">Text</div>
        <div className="comp_image7">Text</div>
        <div className="comp_image8">Text</div>
        </div>

                
        </>
    
    );
    
}

export default Comparison; 
import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';



const Timeline = () => {
    const [moonYears, setMoonYears] = useState([]);
    const [planetYears, setPlanetYears] = useState([]);
    const [asteroidYears, setAsteroidYears] = useState([]);
    const [moonYearsCount, setMoonYearsCount] = useState([]);
    const [planetYearsCount, setPlanetYearsCount] = useState([]);
    const [asteroidYearsCount, setAsteroidYearsCount] = useState([]);

    const [planetData, setPlanetData] = useState([]);
    const [moonData, setMoonData] = useState([]);
    const [asteroidData, setAsteroidData] = useState([]);



    useEffect(() => {

            
        axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        .then((res) => {
            console.log(res);
            const data = res.data.bodies

            let moons = data.filter(item => item.bodyType == 'Moon');
            let planets = data.filter(item => item.bodyType == 'Planet');
            let asteroids = data.filter(item => item.bodyType == 'Asteroid');

            let moonLabels = moons.map(item => item.discoveryDate.substring(6));
            let moonLabelsFinal = [...new Set(moonLabels)];
            let moonLabelsFinalSorted = moonLabelsFinal.sort((a,b) => a-b);

            setMoonYears(moonLabelsFinalSorted);
            console.log(moonLabelsFinal);
            console.log(moonLabels);

            let moonCount = [];
            for (let i = 0; i < moonLabelsFinal.length; i++) {
                moonCount.push(moonLabels.filter(item => item == moonLabelsFinalSorted[i]).length)
            }
            setMoonData(moonCount);
            console.log(moonCount);

            let planetLabels = planets.map(item => item.discoveryDate.substring(6));
            let planetLabelsFinal = [...new Set(planetLabels)];
            let planetLabelsFinalSorted = planetLabelsFinal.sort((a,b) => a-b);

            setPlanetYears(planetLabelsFinalSorted);
            console.log(planetLabelsFinal);
            console.log(planetLabels);

            let planetCount = [];
            for (let i = 0; i < planetLabelsFinal.length; i++) {
                planetCount.push(planetLabels.filter(item => item == planetLabelsFinalSorted[i]).length)
            }
            setPlanetData(planetCount);
            console.log(planetCount);

            let asteroidLabels = asteroids.map(item => item.discoveryDate.substring(6));
            let asteroidLabelsFinal = [...new Set(asteroidLabels)];
            let asteroidLabelsFinalSorted = asteroidLabelsFinal.sort((a,b) => a-b);

            setAsteroidYears(asteroidLabelsFinalSorted);
            console.log(asteroidLabelsFinal);
            console.log(asteroidLabels);

            let asteroidCount = [];
            for (let i = 0; i < asteroidLabelsFinal.length; i++) {
                asteroidCount.push(asteroidLabels.filter(item => item == asteroidLabelsFinalSorted[i]).length)
            }
            setAsteroidData(asteroidCount);
            console.log(asteroidCount);
            
        })
    },[])

    let selectedStat = useRef();
    const [chartData, setChartData] = useState([]);
    const [chartLabels, setChartLabels] = useState([]);
    const [chartTitle, setChartTitle] = useState([]);
    const getStats = () => {
        let selectedStatValue = selectedStat.current.value;
        if (selectedStatValue == 'moons'){
            setChartData(moonData);
            setChartLabels(moonYears);
            setChartTitle('Moons')
        } else if (selectedStatValue == 'planets'){
            setChartData(planetData);
            setChartLabels(planetYears);
            setChartTitle('Planets')
        } else if (selectedStatValue == 'asteroids'){
            setChartData(asteroidData);
            setChartLabels(asteroidYears);
            setChartTitle('Asteroids')
        }
    }



    const data = {
        labels: chartLabels,
        datasets: [
            {
            label: [`Discovered ${chartTitle} Over Ten Years`],
            data: chartData,
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
    }

    return (
        <>
        <h>Discovery Timeline</h>

        <select className="select" onChange={getStats} ref={selectedStat}>
                        <option>Choose stats to compare</option>
                        <option value="moons">Moons</option>
                        <option value="planets">Planets</option>
                        <option value="asteroids">Asteroids</option>                        
                    </select>

        <div className="timeline-timeline-block">
            <div className="timeline-timeline">
                <h5>Timeline of the Discovered {chartTitle}</h5>
                <Line data ={data} />
            </div>
            
        </div>

        


        
        

        </>
    )
};
export default Timeline;



import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import { Bar, Pie, PolarArea } from 'react-chartjs-2';



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
        setPlanetOneInfo(planetInfo.filter((item) => item.englishName === planetOneName))
        setPlanetOneName(planetOneName);
    }
  
    const [planetTwoInfo, setPlanetTwoInfo] = useState([]);
    const [planetTwoName, setPlanetTwoName] = useState([]);


    let selectedPlanetTwo = useRef();
    const getPlanetTwo = () => {
        let planetTwoName = selectedPlanetTwo.current.value;
        setPlanetTwoInfo(planetInfo.filter((item) => item.englishName === planetTwoName))
        setPlanetTwoName(planetTwoName);
    }


    const [chartData, setChartData] = useState([]);
    const [planetOneData, setPlanetOneData] = useState();
    const [planetTwoData, setPlanetTwoData] = useState();

    let selectedStat = useRef();

    const [statTypeValue, setStatTypeValue] = useState();
    const getStats = () => {
        let stat = selectedStat.current.value;
        let planetOneStatValue = planetOneInfo[0][stat];
        let planetTwoStatValue = planetTwoInfo[0][stat];

        let statType = ""
        if (stat == "avgTemp"){
            statType ="Average Temperature"
        } else if (stat == "density"){
            statType ="Density"
        } else if (stat == "equaRadius"){
            statType ="Equatorial Radius"
        } else if (stat == "polarRadius"){
            statType ="Polar Radius"
        } else if (stat == "gravity"){
            statType ="Gravity"
        }

        setStatTypeValue(statType);

        console.log(chartData)
        setChartData([planetOneStatValue, planetTwoStatValue]);
        setPlanetOneData(planetOneStatValue);
        setPlanetTwoData(planetTwoStatValue);
    
    }


    console.log(planetOneData)

   


  
    return (
        <>
        <div className="astro-1">
        </div>
        <p3>The Big Bang</p3>
        <div className="nav-icons1">
        </div>
        <div className="nav-icons2">
        </div>
        <div className="nav-icons3">
        </div>
        <div className="rocket">
        </div>

      
   
        <div className="block-text"><h4>You Shouldn't Wonder!</h4>
        <p2>The Big Bang provides you with information regarding<br></br>
        the eight planets in the Solar System so you won't have to <br></br>
        wonder what it is. </p2>
        </div>

        <div className="block-text-directions"><h4>Compare Directions</h4>
        <p2>Locate the drop down functions and select two planets<br></br>
        and the information you would like to compare. <br></br>
        Feel free to play around! </p2>
        </div>

     


                
        <select onChange={getPlanetTwo} ref={selectedPlanetTwo}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.englishName}>{item.englishName}</option>)
                        }
                    </select>
                    
                    <select onChange={getPlanetOne} ref={selectedPlanetOne}>
                        <option>Choose Planets</option>
                        {
                            planetInfo.map(item => <option value={item.englishName}>{item.englishName}</option>)
                        }
                    </select>

                    

                    <select onChange={getStats} ref={selectedStat}>
                        <option>Compare Stats</option>
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
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:  'rgba(255, 99, 132, 1)'
        }]    }} height={400} width={600} option={{}}
            />


        </div>
        

        </div>


        <div className="result-table">
        <p4>The {statTypeValue} of {planetOneName} is: <br></br><h7>{planetOneData}</h7>
        <br></br></p4>
        <p4>The {statTypeValue} of {planetTwoName} is: <br></br><h7>{planetTwoData}</h7>
        </p4>
        </div>

        <div className="manmoon3"></div>


    
                
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
        <div className="result-table3">
        <p4>The {statTypeValue} of {planetOneName} is: <br></br><h7>{planetOneData}</h7>
        <br></br></p4>
        <p4>The {statTypeValue} of {planetTwoName} is: <br></br><h7>{planetTwoData}</h7>
        </p4>
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

        <div className="result-table1">
        <p4>The {statTypeValue} of {planetOneName} is: <br></br><h7>{planetOneData}</h7>
        <br></br></p4>
        <p4>The {statTypeValue} of {planetTwoName} is: <br></br><h7>{planetTwoData}</h7>
        </p4>
        </div>

        
      

                
        </>
    
    );
    
}

export default Comparison; 
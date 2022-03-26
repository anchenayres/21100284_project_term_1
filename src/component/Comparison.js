import React from "react";
import axios from "axios";
import "chart.js/auto";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from "react-chartjs-2";
import TableItem from "./TableItem";
import { useState, useEffect, useRef } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Comparison = (props) =>{

    const [chartInfo, setChartInfo] = useState ([]);
    const [knownInfo, setKnownInfo] = useState ([]);
    const [unknownInfo, setUnknownInfo] = useState ([]);
    const [showPlanets, setShowPlanets] = useState([]);
    const linkVal = useRef();

    useEffect(()=> {
        axios.get("https://api.le-systeme-solaire.net/rest/bodies/");
        axios.get("https://api.le-systeme-solaire.net/rest/knowncount/")
        .then((res)=> {
            let data = res.data;

            let unknown = data.filter((item) => item.unknown === true).length;
            let known = data.filter((item) => item.known === false).length;

            console.log(unknown);
            console.log(known)
            
            setChartInfo([unknown, known]);

            const unknownData = [];
            const knownData = [];


            for(let i = 0; i < data.length; i++) {
                if (data[i].unkown === false){
                    knownData.push({
                        planetName: data[i].name,
                        
                    });
                } else {
                    unknownData.push({
                        planetName: data[i].name,  
                    });
                }
            }

            setKnownInfo(knownData);
            setUnknownInfo(unknownData);

            let startItem = knownData.map((item) => <TableItem id={item.id} frame={item.planetName} /> )

            setShowPlanets(startItem);

        })
    }, [])

    const knownData = knownData.map((item) => <TableItem id={item.id} frame={item.planetName} /> )
    const unknownData = unknownData.map((item) => <TableItem id={item.id} frame={item.planetName} /> )

    console.log(knownInfo);
    console.log(unknownInfo);

    const ChartData = {
        labels: ['Success', 'Failures'],
        datasets: [{
            label: 'Success Fail for Launches',
            data: [12, 19],
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

    }

    function updatePlanets() {
        let getValue = linkVal.current.value;
        if(getValue === "Failed") {
            setKnownInfo(knownInfo);
        } else if (getValue === "Success") {
            setShowPlanets(unknownInfo);
        }
    }

    return (
        <div>
            <div className="left-panel"> 
                <Doughnut data={ChartData} />
            </div>
            <div className="right-panel">
                <h3>Mission Information</h3>
                <select onChange={updatePlanets} ref={linkVal}>
                    <option>Failed</option>
                    <option>Success</option>
                </select>
                <div className="container">
                    {showPlanets}
                </div>
            </div>
        </div>
         
            
    );
}

export default Comparison; 
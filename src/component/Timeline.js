import React from "react";
import "chart.js/auto";
import axios from "axios";
import { useState, useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);





    const Timeline = () => {
    const [timeInfo, settimeInfo] = useState([]);

    const labels = ['2010', 'February', 'March', 'April', 'May', 'June', 'July'];

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

            const ten = yearlyDisc.filter((item) => item === "2010").length;

          console.log(ten);

            settimeInfo([ten]);
        })
    },[])

    return (
        <>
            <div className="line_chart">
                <Line data = {{
                    labels,
                    datasets: [
                        {
                        label: 'Dataset 1',
                        data: timeInfo,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }, 
                    ],
                }} 
                />
            </div>
        </>
    )
};

export default Timeline;

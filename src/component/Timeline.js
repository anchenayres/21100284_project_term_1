import React from "react";
import "chart.js/auto";
import { Line } from 'react-chartjs-2';



const Timeline = () => {
    return (
        <>
            <div className="line_chart">
                <Line data = {{
                    datasets: [{
                        label: 'My  Dataset',
                        axis: 'y',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        backgroundColor: [
                            'rgb(50, 12, 192)',
                            'rgb(8e, 45, 192)',
                            'rgb(75, 192, 192)',
                            'rgb(75, 192, 100)',
                            'rgb(75, 192, 192)',
                            'rgb(75, 192, 192)',
                            'rgb(75, 192, 192)',
                        ],
                        tension: 0.1,
                        radius: 6,
                        
                    }]
                    
                }}   
                />
            </div>
        </>
    )
};

export default Timeline;

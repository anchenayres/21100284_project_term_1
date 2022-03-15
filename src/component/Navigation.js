const Navigation = () => {
    return (
        <>
        <div className = "top-nav"></div>
        <div className = "nav">
            <h1>Weather</h1>
            <body onload="draw()">
                <canvas id="circle" width="100" height="100"></canvas>
            </body>
            
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/ComponentTwo">Comparison</a></li>
            <li><a href="/ComponentThree">Timeline</a></li>
        </ul>
        </div>

        <canvas id="nav-right" width="100" height="100"></canvas>
        </>
        
    )
}

export default Navigation; 


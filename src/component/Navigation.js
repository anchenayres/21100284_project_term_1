const Navigation = () => {
    return (
        <>
        <div className = "top-nav"></div>
        <div className = "nav">
            
            <body onload="draw()">
                <canvas id="circle" width="100" height="100"></canvas>
                <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto"></link>
            </body>
            
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/ComponentTwo">Comparison</a></li>
            <li><a href="/ComponentThree">Timeline</a></li>
        </ul>
        </div>

        
        </>
        
    )
}

export default Navigation; 


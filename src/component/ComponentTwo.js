import axios from "axios";

axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
.then((response) => {
console.log(response);
})
.catch((err) => {
    console.log(err);
});


const ComponentTwo = () =>{
    return (
       <>
        <canvas id="block-1" width="700" height="400"></canvas>
        <canvas id="block-2" width="700" height="400"></canvas>
        <canvas id="block-3" width="700" height="200"></canvas>
        <canvas id="block-4" width="700" height="200"></canvas>
                
            
       </>
    );
}

export default ComponentTwo; 
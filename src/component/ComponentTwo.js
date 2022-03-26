import axios from "axios";

axios.get('https://www.balldontlie.io/api/v1/teams')
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
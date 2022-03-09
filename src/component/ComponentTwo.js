import axios from "axios";

axios.get('https://catfact.ninja/fact')
.then((response) => {
console.log(response);
})
.catch((err) => {
    console.log(err);
});


const ComponentTwo = () =>{
    return (
       <>
       <p></p>
       </>
    );
}

export default ComponentTwo; 
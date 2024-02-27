import './display.css';
import {Typography} from "@material-tailwind/react";

interface DisplayProps{

    onClick:()=>void;
}

export default function Display(props:DisplayProps){
    var imageName = require('/home/billysh/Documents/PokedexReact/src/pika.jpg')
    return (
        <figure>
            <img className="h-96 w-full rounded-lg object-cover object-center" src={imageName} alt="pika" />
            <br></br>
            <Typography align="center" variant="large"> Image caption</Typography>
        </figure>
        )

       


    
}
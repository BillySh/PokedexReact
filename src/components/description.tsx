import './description.css';

/*
interface ButtonProps{
    color?: string;
    label:string;
    onClick:()=>void;
}

export default function Button(props:ButtonProps){
    return (
        <button className={`btn ${!props.color?'btn-blue':''} ${props.color=='green'?'btn-green':''} ${props.color=='red'?'btn-red':''}`} onClick={props.onClick}>{props.label}</button>
    )
}
*/

interface DescriptionProps{
    //color?: string;
    label:string;
}

export default function Description(props:DescriptionProps){
    return (
        <div className={`desc`}>{props.label}</div>
    )
    
}
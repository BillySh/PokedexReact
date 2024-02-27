<<<<<<< HEAD
import "./searchBox.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="btn btn-green" onClick={props.onClick}>
      {props.label}{" "}
    </button>
  );
}
=======
import './button.css';

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
>>>>>>> main

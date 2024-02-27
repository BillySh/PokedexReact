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

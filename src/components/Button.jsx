import "../styles/Button.css";

export function Button(props) {
    return (
        <button className="button1"
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button> 
    );
}

export function Button2(props) {
    return (
        <button className="button-send"
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button> 
    );
}
import "../styles/FormField.css";

export function FormField(props) {
    return (
        <div className="form-field2">
            {props.children}
        </div>
    );
}

export function FormField2(props) {
    return (
        <div className="form-field">
            {props.children}
        </div>
    );
}
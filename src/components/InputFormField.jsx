import "../styles/InputFormField.css";
import { FormField } from "./FormField";
import { FormField2 } from "./FormField";

export function InputFormField(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <FormField>
            <label>{props.label}</label>
            <input placeholder="Type a message ..." type={props.type} className="input-form-field2" onChange={handleChange} value={props.value} />
        </FormField>
    );
};

export function InputFormField2(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <FormField2>
            <label>{props.label}</label>
            <input placeholder="Max 15 characters!" maxLength={15} type={props.type} className="input-form-field" onChange={handleChange} value={props.value} />
        </FormField2>
    );
};
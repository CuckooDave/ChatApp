import "../styles/SubmitFormField.css";
import { Button2 } from "./Button";

export function SubmitFormField(props) {
    return (
        <div className="submit-form-field">
            <Button2 className="button-send" type="submit" label={props.label} />
        </div>
    );
}
import { useState } from "react";
import { FormField2 } from "./FormField";
import { avatarImages } from "../library/avatar";
import { avatarImages2 } from "../library/avatar";
import { useEffect } from "react";

import"../styles/Button.css"
import "../styles/PhotoEffect.css"

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        props.onChange(index);
    }, [index, props]);

    function handlePreviousClick() {
        if (index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function handleNextClick() {
        if (index >= avatarImages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }


    return (
        <FormField2>
            <button type="button" className="avatar" onClick={handlePreviousClick}>←</button>
            <div className="gallery">
            <img src={avatarImages[index]} alt={index} width={100} />
            <img src={avatarImages2[index]} alt={index} width={100} />
            </div>
            <button type="button" className="avatar" onClick={handleNextClick}>→</button>
        </FormField2>
    )
}

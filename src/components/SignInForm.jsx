import { useState } from "react";
import { AvatarFormField } from "../components/AvatarFormField";
import { Button } from "../components/Button";
import { FormField2 } from "../components/FormField";
import { InputFormField2 } from "../components/InputFormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { getRandomName } from "../library/random";

import"../styles/Button.css"

export function SignInForm(props) {
    const [ formState, setFormState ] = useState(getRandomName());
    const [ avatar, setAvatar ] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar,
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handleAvatarChange(value) {
        setAvatar(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <AvatarFormField onChange={handleAvatarChange} />
            </div>
            <div className="username">
            <InputFormField2 label="Username"
                type="text"
                onChange={handleUsernameChange}
                value={formState} />
            </div>
            {/*<div className="random-name">    
            <FormField>
                <RandomNameButton onRandomName={handleUsernameChange} />
            </FormField>
            </div>*/}
            <div className="sign-in-button"> 
            <FormField2>
                <Button  type="submit" label="Sign in" />
            </FormField2>
            </div>
        </form>
    );
}

import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { AppContext } from "../contexts/AppContext";

import"../styles/SignInPage.css"
import"../styles/Button.css"
import"../styles/Rain.css"

/* RAIN?
let hrElement;
let counter = 100;

for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(hrElement);
  }
*/
export function SignInPage() {
    const context = useContext(AppContext);

    function handleSubmit(formData) {
        context.setUsername(formData.username);
        context.setAvatarIndex(formData.avatarIndex);
    }

    if (context.isSignedIn) {
        return <Navigate to="/chat" replace />;
    }

    return (
        <div className="login-container">
            <div className="sign-in">
                    <SignInForm onSubmit={handleSubmit} />
                    <Link className="faq" to="/faq">Read the FAQ</Link>
            </div>    
        </div>
    );
};

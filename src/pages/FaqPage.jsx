import { Link } from "react-router-dom";

import "../styles/Text.css"
import "../styles/PhotoEffect.css"

export function FaqPage() {
    return (
        <div className="text">
            <em>
            <h1>FAQ</h1>
            <div>
                <p>"Q1?"<br></br>
                "A1."
                </p>
                <p>"Q2?"<br></br>
                "A2."
                </p>
            </div></em>
            <div>Back to:
            <Link to="/" className="faq_sign-in">Sign in</Link>
            </div>
        </div>
        
        
    );
}
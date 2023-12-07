import { useState } from "react";
import { Summary } from "./Summary";

export const Submit = () => {


    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        // Perform actions or state changes when the button is clicked
        setButtonClicked(true);
        // Additional logic can be added here

    };

    return (
        <div className="submitButton">
            <button type="button" onClick={handleButtonClick}>Submit</button>
            {buttonClicked && <Summary />}
        </div>
    )
}
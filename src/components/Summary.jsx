import { useState } from "react";

export const Summary = ({ attraction, day, time }) => {
    const [isVisible, setIsVisible] = useState(true);
    //const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        //setButtonClicked(true);
        // Toggle the visibility of the div
        setIsVisible(!isVisible);
    };

    console.log({ attraction })
    console.log({ day })
    console.log({ time })
    return (
        <div className="submitButton">
            <button type="button" onClick={handleButtonClick}>Submit</button>
            {/*buttonClicked && */}

            {isVisible && (
                <div className="summary-wrap">
                    <h2>Your Booking Information</h2>
                    <p>
                        You have booked a fast track pass for {attraction} to use this {time} {day}.
                        <h2>Pass #67</h2>
                    </p>
                </div>
            )}
        </div>

    );
};

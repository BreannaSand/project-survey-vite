//import { useState } from "react";

export const Time = ({ updateFormData, value }) => {
    const timeInput = () => updateFormData("time", "evening");
    return (
        <div className="time-wrapper">
            <label>Time:</label>
            <input type="string" value={value} onChange={timeInput} />
        </div>
    )
}

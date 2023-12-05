//import { useState } from "react";

export const Day = ({ updateFormData, value }) => {
    const dayInput = () => updateFormData("day", "today");
    return (
        <div>
            <label>Day:</label>
            <input type="string" value={value} onChange={dayInput} />
        </div>
    )
}

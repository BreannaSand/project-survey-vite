//import { useState } from "react";

export const Attraction = ({ updateFormData, value }) => {
    const attractionInput = () => updateFormData("time", "haunted mansion");
    return (
        <div className="attraction-wrapper">
            <label>Attraction:</label>
            <input type="string" value={value} onChange={attractionInput} />
        </div>
    )
}
import { useState } from "react";

export const Time = ({ updateFormData }) => {

    const [selectedValue, setSelectedValue] = useState('')

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        updateFormData("time", selectedValue);
        console.log(selectedValue);

    };
    return (
        <div className="time-wrapper">
            <label htmlFor="attraction">Time:   </label>
            <select id="time" name="time" onChange={handleInputChange}>
                <option value="choose" defaultValue >Choose: </option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>
        </div>
    )
}

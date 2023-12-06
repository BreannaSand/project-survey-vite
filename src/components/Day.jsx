import { useState } from "react";

export const Day = ({ updateFormData }) => {

    const [selectedValue, setSelectedValue] = useState('')

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        updateFormData("day", selectedValue);
        console.log(selectedValue);

    };

    return (
        <div className="day-wrapper">

            <label>Day:    </label>
            <input type="radio" id="today" name="day" value="today" onChange={handleInputChange} />
            <label htmlFor="rasio">Today</label>
            <input type="radio" id="tomorrow" name="day" value="tomorrow" onChange={handleInputChange} />
            <label htmlFor="css">Tomorrow</label>
        </div>
    )
}

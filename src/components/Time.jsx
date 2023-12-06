import { useState } from "react";

export const Time = ({ updateFormData }) => {
    //const timeInput = () => updateFormData("time", "evening");

    const [selectedValue, setSelectedValue] = useState('')

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        updateFormData("time", selectedValue);
        console.log(selectedValue);

    };
    return (
        <div className="time-wrapper">
            <label>Time:   </label>
            <select id="time" name="time" >
                <option value="choose" selected>Choose: </option>
                <option value="morning" onChange={handleInputChange}>Morning</option>
                <option value="afternoon" onChange={handleInputChange}>Afternoon</option>
                <option value="night" onChange={handleInputChange}>Night</option>
            </select>
        </div>
    )
}

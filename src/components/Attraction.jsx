import { useState } from "react";

export const Attraction = ({ updateFormData }) => {


    const [selectedValue, setSelectedValue] = useState('hello');

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        updateFormData("attraction", newValue);
        console.log(selectedValue);
        console.log(newValue);
    };


    return (
        <div className="attraction-wrapper">
            <label htmlFor="attraction">Attraction:  </label>
            <select id="attraction" name="attraction" onChange={handleSelectChange}>
                <option value="choose" defaultValue>Choose: </option>
                <option value="hauntedMansion">Haunted Mansion</option>
                <option value="spaceMountain">Space Mountain</option>
                <option value="pirates">Pirates of The Caribbean</option>
                <option value="indianaJones">Indiana Jones</option>
                <option value="smallWorld">Small World</option>
                <option value="thunderMountain">Big Thunder Mountain</option>
            </select>

        </div>
    )
}
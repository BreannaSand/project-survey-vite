import { useState } from "react";

export const Attraction = ({ updateFormData }) => {


    const [selectedValue, setSelectedValue] = useState('')

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        updateFormData("attraction", selectedValue);
        console.log(selectedValue);

    };

    return (
        <div className="attraction-wrapper">
            <label htmlFor="attraction">Attraction:  </label>
            <select id="attraction" name="attraction" onChange={handleSelectChange}>
                <option value="choose" selected>Choose: </option>
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
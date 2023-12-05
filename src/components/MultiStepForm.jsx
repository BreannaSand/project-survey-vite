import { useState } from "react";
import { Day } from "./Day";
import { Time } from "./Time";
import { Attraction } from "./Attraction";
import { Summary } from "./Summary";

export const MultiStepForm = () => {
    const [formData, setFormData] = useState({
        day: "",
        time: "",
        attraction: ""
    });

    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }))
    }

    console.log(formData)
    return (

        <div className="form-wrapper">
            <p>Fast Track Booking Form</p>
            {<Day value="today" updateFormData={updateFormData} />}
            {<Time value="morning" updateFormData={updateFormData} />}
            {<Attraction value="haunted mansion" updateFormData={updateFormData} />}
            {<Summary />}
        </div>


    );
};

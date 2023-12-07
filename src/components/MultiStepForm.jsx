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
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    }

    console.log(formData)
    return (

        <div className="form-wrapper">
            <p>Fast Track Booking Form</p>
            {<Attraction updateFormData={updateFormData} />}
            {<Day updateFormData={updateFormData} />}
            {<Time updateFormData={updateFormData} />}
            {<Summary attraction={formData.attraction} day={formData.day} time={formData.time} />}
        </div>



    );
};

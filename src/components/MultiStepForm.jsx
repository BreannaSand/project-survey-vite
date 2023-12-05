import { useState } from "react";
import { Day } from "./Day"

export const MultiStepForm = () => {
    const [formData, setFormData] = useState({
        day: ""

    });

    const updateFormData = (field, value) => {
        setFormData((previous) => ({ ...previous, [field]: value }))
    }

    console.log(formData)
    return (

        <div>
            MultiStepForm
            {<Day value="today" updateFormData={updateFormData} />}
        </div>


    );
};

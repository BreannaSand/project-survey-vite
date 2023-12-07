//import { useState } from "react";

export const Summary = ({ attraction, day, time }) => {


    console.log({ attraction })
    console.log({ day })
    console.log({ time })
    return (

        <div className="summary-wrap">
            <h2>Your Booking Information</h2>
            <p>

                You have booked a fast track pass for {attraction} to use this {time} {day}.
                <h2>Pass #67</h2>


            </p>

        </div>


    );
};

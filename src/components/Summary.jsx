//import { useState } from "react";

export const Summary = ({ attraction, day, time }) => {

    console.log({ attraction })
    console.log({ day })
    console.log({ time })
    return (

        <div className="summary-wrap">
            <h1>Your Booking Information</h1>
            <p>

                You have booked a fast track pass for {attraction} to use {day} this {time}.


            </p>

        </div>


    );
};

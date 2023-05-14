import React from "react";
import ApartmentBox from "../../components/ApartmentBox";
import './ApartmentOwner.scss'

export default function ApartmentOwner(){
    return(
        <>
            <div className="Apartment">
                <ApartmentBox/>
                <ApartmentBox/>
                <ApartmentBox/>
                <ApartmentBox/>
            </div>
        </>
    )
}
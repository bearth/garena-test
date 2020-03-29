import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel";

const Section3 = () => {
    const [asianCountries, setAsianCountries] = useState([]);

    const getAsianCountries = async () => {
        try {
            const url = "/api/countries/asia";
            const response = await axios.get(url);
            const countries = response.data.data;
            setAsianCountries(countries);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAsianCountries();
    }, [])

    return (
        <div className="section3">
            <img className="center" src="/images/content3.png" />
            <h4>ตัวอย่าง</h4>
            <div className="wrapper">
                <Carousel countries={asianCountries} />
            </div>
        </div>
    );
};

export default Section3;

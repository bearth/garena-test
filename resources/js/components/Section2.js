import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";

const Section2 = () => {
    const [totalPopulation, setTotalPopulation] = useState(0);
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        try {
            const url = "/api/countries";
            const response = await axios.get(url);
            const totalPopulation = response.data.totalPopulation;
            const countries = response.data.data;
            setTotalPopulation(totalPopulation);
            countries.length = 12;
            setCountries(countries);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div className="section2">
            <img className="center" src="/images/content1.png" />
            <h4>รายละเอียดกิจกรรม</h4>
            <h5>
                จำนวนประชากรทั่วโลกรวม {totalPopulation.toLocaleString("en")} คน
            </h5>
            <div className="wrapper">
                <div className="flex-grid">
                    {countries.map(country => (
                        <Country key={country.alpha3Code} country={country} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section2;

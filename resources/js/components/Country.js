import React from "react";

const Country = ({ country }) => {
    return (
        <div className="col">
            <img src={country.flag} />
            <p>{country.name}</p>
            <p>{country.currencies[0].name}</p>
            <p>{country.languages[0].name}</p>
        </div>
    );
};

export default Country;

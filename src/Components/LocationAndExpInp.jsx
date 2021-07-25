import axios from "axios";
import React, { useRef } from "react";
import styled from 'styled-components'
import { useState } from "react";
import Select from 'react-select';

const LocationIpBox = styled.div`
    input {
        position: relative;
    }
    div > div  {
        position: absolute;
        flex-direction: column;
    }

`

export function LocationAndExpInp( {years, handleFormData} ){

    const [cities, setCities] = useState([]);
    const [showCities, setShowCities] = useState(false);
    const allCities = []

    

    const locationIpBox = useRef();

    const handleChange = (e) => {
        if(e.target.value.length > 2) {
            setShowCities(true)
            setCities(allCities.filter((el) => {
            let k = el.toLowerCase();
            let city = e.target.value.toLowerCase();
            return k.includes(city);
        }));
        }else {
            setShowCities(false);
            setCities([]);
        }
    }

    // const handleFormData = (el, ref) => {
    //     setFormData({...FormData, location: el})
    //     ref.current.value = el;
    // }

    return (<div>

        <LocationIpBox>
            <input ref={locationIpBox} name="location" placeholder="Location" onChange={handleChange}/>
            {showCities && <div>{cities.map((el) => <li onClick={() => handleFormData(el, locationIpBox)}>{el}</li>)}</div>}
        </LocationIpBox>
       
    <select>
        <option value="" hidden>Experiance</option>
        {years.map((el) => {
            return <option value={el}>{el}</option>
        })}
    </select>
    </div>
    );
}
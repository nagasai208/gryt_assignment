import React, { useState } from 'react';
import { MainDiv, DropDown } from './styledComponents';

function DropDownedMonth() {
    let [month,setMonth] = useState('jan')
    return (
        <MainDiv>
            <p>{month}</p>
            <DropDown class="ui dropdown" onChange={(e) => setMonth(e.target.value)}>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </DropDown>
           
        </MainDiv>
    )
}

export default DropDownedMonth;
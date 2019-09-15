import React, {useState} from 'react';

function Firstcomponent (props) {
    const [number, changeNumber] =useState(21);


    return (
        <div className="box" onClick={function () {
            changeNumber(number +1)
        }}>{number}{props.name}</div>
    )
}
export default Firstcomponent;

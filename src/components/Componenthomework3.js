import React, {useState} from 'react';

function Componenthomework3 (props) {
    const [age, ageNumber] =useState(35);


    return (
        <div className="box2" onClick={function () {
            ageNumber(age +1)
        }}>I am {age} years old.</div>
    )
}
export default Componenthomework3;

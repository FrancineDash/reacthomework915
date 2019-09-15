import React, {useState} from 'react';

function Componenthomework2 (props) {
    const [name] = useState("Francine");

    return (
        <div className="box3">Name:  {name}</div>
    )
}
export default Componenthomework2;

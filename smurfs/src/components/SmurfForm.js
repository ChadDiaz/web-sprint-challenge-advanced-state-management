import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf} from '../actions'

const SmurfForm = (props) => {
    
    const [newSmurf, setNewSmurf] = useState({});

    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = e => {
        e.preventDefault();
        props.addSmurf(newSmurf)
    }

    return (
        <form onSubmit={handleClick}>
            <label htmlFor="name">
                Name:
                <input onChange={handleChange} type="text" name="name" id="name"></input>
            </label>
            <br/>
            <label htmlFor="age">
                Age:
                <input onChange={handleChange} type="text" name="age" id="name"></input>
            </label>
            <br/>
            <label htmlFor="height">
                Height:
                <input onChange={handleChange} type="text" name="height" id="name"></input>
            </label>
            <br/>
            <button>ADD</button>
        </form>
    )
}



export default connect(null, { addSmurf })(SmurfForm)

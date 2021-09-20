//@ts-check
import React, { useEffect } from "react";
import styled from 'styled-components';

const ClassAndSubs = () => {

    const [state, setState] = React.useState({cls : 6, subs : []});

    const handle2 = (e) => {
        setState({
            cls : e.target.value,
            subs : []
        })
    }

    const handle3 = (e) => {
        console.log(e.target.name);
        console.log(e.target.checked);
    }

    return(
        <div>
            <h3>Class/Subjects : </h3>
            <select style={{fontFamily: 'raleway'}} onChange={handle2} value={state.cls}>
                <option value={6}>Class 6</option>
                <option value={7}>Class 7</option>
                <option value={8}>Class 8</option>
                <option value={9}>Class 9</option>
                <option value={12}>Class 12</option>
            </select> 

            {state.cls <= 10 && 
                <div>
                    <input type="Checkbox" name="English" onChange={handle3}/>
                    <label>English</label>
                    <input type="Checkbox" name="Hindi" onChange={handle3}/>
                    <label>Hindi</label>
                    <input type="Checkbox" name="Telugu" onChange={handle3}/>
                    <label>Telugu</label>
                    <input type="Checkbox" name="Maths" onChange={handle3}/>
                    <label>Maths</label>
                    <input type="Checkbox" name="Science" onChange={handle3}/>
                    <label>Science</label>
                    <input type="Checkbox" name="Social" onChange={handle3}/>
                    <label>Social</label>
                </div>
            }

            {state.cls == 12 &&
                <div>
                    <input type="checkbox" name="Physics" onChange={handle3}/>
                    <label>Physics</label>
                    <input type="checkbox" name="Chemistry" onChange={handle3}/>
                    <label>Chemistry</label>
                    <input type="checkbox" name="Biology" onChange={handle3}/>
                    <label>Biology</label>
                </div>
            }

        </div>
        
    )
}

const PrefTimeSlots = () => {

    const [state, setState] = React.useState([]);

    const handle3 = (e) => {
        if(e.target.checked)
            setState([...state, e.target.name]);
        else{
            var tmp = state.filter(slot => slot != e.target.name)
            setState(tmp);
        }
    }

    useEffect(() => {console.log(state);}, [state]);

    return(
        <div>
            <h4>Preferred Timeslots : </h4>

            <input type="Checkbox" name="Morning" onChange={handle3}/>
            <label>Morning</label>
            <input type="Checkbox" name="Afternoon" onChange={handle3}/>
            <label>Afternoon</label>
            <input type="Checkbox" name="Evening" onChange={handle3}/>
            <label>Evening</label>
        </div>
    )
}

const LearnerSignup = () => {
    const [state, setState] = React.useState({lang : ""});

    const handle1 = (e) => {
        console.log(e.target.value);
        setState({...state, lang: e.target.value})
    }
    return(
        <div>
            <h1>Learner signup</h1>
            <input name="Name" placeholder="Name"/>
            <input name="Email" placeholder="Email (optional)"/>

            <select  style={{fontFamily: 'raleway'}} onChange={handle1} value={state.lang}>
                <option value="" disabled selected>Preferred Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
                <option value="Tamil">Tamil</option>
                <option value="Kannada">Kannada</option>
                <option value="Malayalm">Malayalam</option>
            </select>  

            <ClassAndSubs/>
            <PrefTimeSlots/>


        </div>
    )
}

export default LearnerSignup;


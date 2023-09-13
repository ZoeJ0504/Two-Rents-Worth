import React from 'react';
import { useState } from 'react';
import axios from 'axios'



function SignUp() {
    const [signUpInfo, setSignUpInfo] = useState({})

    const handleOnChange = (event) => { setSignUpInfo({ ...signUpInfo, event.target: event.target.value }) }


    return (
        <div>
            <form>
                <input name="firstname" onChange={(event) => { set(event.target.value) }} />
                <input name='lastname' onChange={(event) => { set(event.target.value) }} />
                <input name="email" onChange={(event) => { set(event.target.value) }} />
                <input name="password" onChange={(event) => { set(event.target.value) }} />
                <input name="passwordconfirmation" onChange={(event) => { set(event.target.value) }} />
                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
};
export default SignUp; 
import React, { useState } from 'react';

function InputPages(){

    const [data, setData] = useState({
        info: {
        name: "",
        lastname: "",
        gender: "",
        status: "Не в браке"
        }
    })

    const getData = (e) => {
        console.log(data);

        setData({
            ...data,
            info: {
                ...data.info,
                [e.target.name]: e.target.value,
            }

        })

    }

    const submit = () => {
        console.log(data);
    }

    return(
        <div>
            <input type="text" name='name' placeholder='Name' onChange={getData}/>
            <input type="text" name="lastname" placeholder='Lastname'onChange={getData}/>
            <select name='gender' onChange={getData}>
                <option>Man</option>
                <option>Woman</option>
            </select>
            <input type="checkbox" name='status' value="В браке" onChange={getData}/>
            <button onClick={submit}> Add User</button>
        </div>
    )
}

export default InputPages;
import React, { useState } from 'react'

function Register() {

    const [formdata, setFormdata] = useState({ name: "", mobile: "", email: "", city: "", gender: "" })

    const [data, setdata] = useState('')

    const inputChange = (e) => {

        setFormdata((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
        console.log(formdata)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // alert(JSON.stringify(formdata,null,3) )
        setdata(formdata)
    }

    return (
        <div className='container'>

            <div className='row mb-5'>
                <div className='col-md-4  offset-md-2 card py-4'>
                    <h2>Register</h2>

                    <form onSubmit={submitHandler}>

                        <div className='form-group'>
                            <div className='text-left'>
                                <label>Name </label>
                                <input type="text" name="name" value={formdata.name} onChange={inputChange} className='form-control' />
                            </div>
                            <div className='text-left'>
                                <label>Mobile </label>
                                <input type="text" name="mobile" value={formdata.mobile} onChange={inputChange} className='form-control' />
                            </div>
                            <div className='text-left'>
                                <label>Email </label>
                                <input type="text" name="email" value={formdata.email} onChange={inputChange} className='form-control' />
                            </div>
                            <div className='form-group text-left'>
                                <label>City </label>
                                <select className='form-control' name="city" value={formdata.city} onChange={inputChange}>
                                    <option>select city</option>
                                    <option>Ananthapur</option>
                                    <option>Bangalore</option>
                                    <option>Hydrabad</option>
                                    <option>Channei</option>
                                </select>
                            </div>
                            <div className='form-group text-left'>
                                <label>Gender </label>
                                <input type="radio" name='gender' value="male" onChange={inputChange} />Male
                                <input type="radio" name='gender' value="female" onChange={inputChange} />Female
                            </div>
                            <div>
                                <button className='btn btn-success' >click</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className='col-md-4  offset-md-2 card py-4'>
                    <h2>Form data</h2>
                    <div>
                        <h2>Name:{data.name}</h2>
                        <h2>Mobile:{data.mobile}</h2>
                        <h2>Email:{data.email}</h2>
                        <h2>City:{data.city}</h2>
                        <h2>Gender:{data.gender}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import './Form.css';
const Form = () => {
    const[firstName, SetFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[mobile, setMobile] = useState('');
    const[email, setEmail] = useState('');
    const[rollNo, setRollNo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefalt();
        console.log(
            {
                firstName,
                lastName,
                mobile,
                email,
                rollNo,
            }
        );
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='username'>First Name</label>
                    <input type="text" name='username'
                    onChange={(e) => SetFirstName(e.target.value)}
                    value={firstName}
                    className="form-control" />
                </div>
                <div className='form-froup'>
                    <label htmlFor="username">Last Name</label>
                    <input type="text" name='username'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    className="form-control" />
                </div>
                <div classname="form-group">
                    <label htmlFor='mobileno'>Mobile no</label>
                    <input type="number" name="mobileno" size="10"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                    className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="emailid"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control" />
                </div>
                <div className='form-group'>
                    <label htmlFor='rollno'>Roll no</label>
                    <input type="number" name="rollno"
                    onChange={(e) => setRollNo(e.target.value)}
                    value={rollNo}
                    className="form-control" />
                </div>
                {/* <button type="submit">Submit</button> */}
            </Form>
             {/* <div className="text-center">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{mobile}</p>
        <p>{email}</p>
        <p>{rollNo}</p>
      </div> */}
      <p>Hi from form</p>
        </div>
    );
}

export default Form;

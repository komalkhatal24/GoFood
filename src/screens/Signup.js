import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Correctly formatted JSON payload
        const payload = {
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            location: credentials.geolocation
        };

        try {
            const response = await fetch("http://localhost:5000/api/createuser", {  // Assuming the correct API endpoint is "/createuser"
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const json = await response.json();  // Correctly parsing the JSON response
            if (response.ok && json.success) {
                alert("User registered successfully!");
            } else {
                alert("Failed to register user: " + json.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert("An error occurred while registering the user.");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', height: '100vh' }}>
                <Navbar />
                <div className='container'>
                    <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="password" className='form-control' name='password' value={credentials.password} onChange={onChange} id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="geolocation" className='form-label'>Address</label>
                            <input type="text" className='form-control' name='geolocation' value={credentials.geolocation} onChange={onChange} id="geolocation" />
                        </div>
                        <button type="submit" className='btn btn-success'>Submit</button>
                        <Link to="/login" className='btn btn-danger'>Already a user</Link>
                    </form>
                </div>
            </div>
        </>
    );
}

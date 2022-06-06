import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
      // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
        const { data } = await login({
            variables: { ...formState },
        });

        Auth.login(data.login.token);
        } catch (e) {
        console.error(e);
        }

        // clear form values
        setFormState({
        email: '',
        password: '',
        });
    };

    return (
        <div className="card">
            <h4 className="card-header">Login</h4>
            <br/>
            <div className="card-body">
                {data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                    </p>
                ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                    /><br/><br/>
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                    /><br/><br/><br/>
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                )}
                {error && (
                    <div className="error-message">
                        {error.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
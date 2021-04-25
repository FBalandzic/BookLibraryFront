import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

function Login({ setUser }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        (async () => {
            if (username !== "" && password !== "") {
                const response = await fetch('https://localhost:44378/api/User/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'username': username,
                        'password': password
                    })
                });
                if (response.status == 200) {
                    const data = await response.json();
                    setUser(data);
                    localStorage.setItem("isLoggedIn", true);
                    history.push('/Books');
                }

            }
        })();

        event.preventDefault();
        return false;
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={e => setUserName(e.target.value)} placeholder="username" />
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">Login</button>
            </form>
            <p>You don't have an account? <Link to="/SignUp">Sign up!</Link></p>
        </div>
    );
}

export default Login;